import React from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import api from '../lib/config';
import { eventProps, projectProps } from '../lib/api';
import Page from '../components/Page';
import Hero from '../components/Hero';
import LinkExternal from '../components/Links/LinkExternal';
import ItemEvent from '../components/Items/ItemEvent';
import ItemProject from '../components/Items/ItemProject';

const homePage: NextPage = () => {
  const currentDateTime = new Date();
  currentDateTime.setHours(currentDateTime.getHours() - 4);
  const currentDateTimeISO = currentDateTime.toISOString();
  const [upcomingEvents, setUpcomingEvents] = useState<eventProps[]>([]);
  const [isLoadingUpcomingEvents, setIsLoadingUpcomingEvents] = useState(false);
  const [projects, setProjects] = useState<projectProps[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  useEffect(
    () => {
      const getUpcomingEvents = async () => {
        try {
          setIsLoadingUpcomingEvents(true);
          const fetchedData = [];
          const { data } = await api.get(
            `events?pagination[page]=1&pagination[pageSize]=10&filters[Day][StartTime][$gte]=${currentDateTimeISO}&sort[0]=id:desc&populate[Day][fields][4]=StartTime&populate[Day][fields][5]=EndTime&populate[Day][fields][6]=Price`
          );
          fetchedData.push(...data?.data);
          if (
            data?.meta?.pagination &&
            fetchedData.length > 0 &&
            data?.meta?.pagination.page < data?.meta?.pagination.pageCount
          ) {
            const { page, pageCount } = data?.meta?.pagination;
            for (let i = page + 1; i <= pageCount; i++) {
              let response = await api.get(
                `events?pagination[page]=${i}&pagination[pageSize]=10&filters[Day][StartTime][$gte]=${currentDateTimeISO}&sort[0]=id:desc&populate[Day][fields][4]=StartTime&populate[Day][fields][5]=EndTime&populate[Day][fields][6]=Price`
              );
              fetchedData.push(...response.data.data);
            };
          };
          fetchedData.filter((item, index, self) =>
            index === self.findIndex((t) => (
              t.id === item.id
            ))
          );
          fetchedData.forEach((event: eventProps) => {
            if (event.attributes.Day) {
              event.attributes.Day = event.attributes.Day.filter((day: any) => {
                const dayStartTime = new Date(day.StartTime).getTime();
                return dayStartTime >= new Date(currentDateTimeISO).getTime();
              });
            };
          });
          fetchedData.forEach((event: eventProps) => {
            if (event.attributes.Day && event.attributes.Day.length) {
              event.attributes.Day.sort((a, b) => {
                const aStartTime = new Date(a.StartTime).getTime();
                const bStartTime = new Date(b.StartTime).getTime();
                return aStartTime - bStartTime;
              });
            };
          });
          fetchedData.sort((a, b) => {
            if ((a.attributes.Day && a.attributes.Day.length) || (b.attributes.Day && b.attributes.Day.length)) {
              const aStartTime = new Date(a.attributes.Day[0]?.StartTime).getTime();
              const bStartTime = new Date(b.attributes.Day[0]?.StartTime).getTime();
              return aStartTime - bStartTime;
            }
            return 0;
          });
          setUpcomingEvents(fetchedData);
        } catch (error: any) {
          if (error?.response?.data) {
            console.error(error?.response?.data.error?.message);
          };
        } finally {
          setIsLoadingUpcomingEvents(false);
        };
      };

      const getProjects = async () => {
        try {
          setIsLoadingProjects(true);
          const fetchedData = [];
          const { data } = await api.get(
            'projects?pagination[page]=1&pagination[pageSize]=10&sort[0]=id:desc'
          );
          fetchedData.push(...data?.data);
          if (
            data?.meta?.pagination &&
            fetchedData.length > 0 &&
            data?.meta?.pagination.page < data?.meta?.pagination.pageCount
          ) {
            const { page, pageCount } = data?.meta?.pagination;
            for (let i = page + 1; i <= pageCount; i++) {
              let response = await api.get(
                `projects?pagination[page]=${i}&pagination[pageSize]=10&sort[0]=id:desc`
              );
              fetchedData.push(...response.data.data);
            };
          };
          const uniqueFetchedData = fetchedData.filter((item, index, self) =>
            index === self.findIndex((t) => (
              t.id === item.id
            ))
          );
          setProjects(uniqueFetchedData);
        } catch (error: any) {
          if (error?.response?.data) {
            console.error(error?.response?.data.error?.message);
          };
        } finally {
          setIsLoadingProjects(false);
        };
      };

      getUpcomingEvents();
      getProjects();
    }, []
  );

  return (
    <Page
      title='Ariadne Antipa'
      description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
      url=''
      image=''
      classNameMain='!px-0 !pt-0 gap-16'
    >
      <>
        <Hero />

        <section
          className='max-w-[500px] text-left px-8'
          id='contact'
        >
          <p>If you’d like to book Ariadne Antipa to play for your event, inquire about piano lessons, or have any other questions, send an email to <br/><LinkExternal className='max-sm:break-all' href='mailto:contact@ariadneantipa.com' title='Contact Ariadne Antipa via Email at Contact@AriadneAntipa.com'>Contact@AriadneAntipa.com</LinkExternal></p>
        </section>

        <section
          className='flex flex-col justify-center align-middle items-top text-center gap-16 px-8'
          id='events-and-projects'
        >
          {isLoadingUpcomingEvents ? (
            <h2 id='loading-upcoming-events'>Loading Upcoming Events...</h2>
          ) : (
            (upcomingEvents && upcomingEvents.length ? (
              <section
                className='bg-ariBlackDarkest min-h-full w-full max-w-[600px] text-center'
                id='events-container'
              >
                <hr className='hrFancy max-w-[600px] !mt-0' />
                {(upcomingEvents.length > 1 ? (
                  <h2 className='mb-4' id='upcoming-events'>Upcoming Events</h2>
                ) : (
                  <h2 className='mb-4' id='upcoming-event'>Upcoming Event</h2>
                ))}
                <div
                  className='w-full flex flex-col gap-6 justify-center align-middle items-center text-center'
                  id='events-list'
                >
                  {upcomingEvents.map((upcomingEvent) => (
                    <ItemEvent
                      key={upcomingEvent.attributes.Name}
                      id={upcomingEvent.id.toString()}
                      Name={upcomingEvent.attributes.Name}
                      Day={upcomingEvent.attributes.Day}
                      Description={upcomingEvent.attributes.Description}
                    />
                  ))}
                </div>
              </section>
            ) : '')
          )}

          {isLoadingProjects ? (
            <h2 id='loading-projects'>Loading Projects...</h2>
          ) : (
            (projects && projects.length ? (
              <section
                className='bg-ariBlackDarkest min-h-full w-full max-w-[600px] text-center'
                id='projects-container'
              >
                <hr className='hrFancy max-w-[600px] !mt-0' />
                {(projects.length > 1 ? (
                  <h2 className='mb-4' id='projects'>Projects</h2>
                ) : (
                  <h2 className='mb-4' id='project'>Project</h2>
                ))}
                <div
                  className='w-full flex flex-col gap-6 justify-center align-middle items-center text-center'
                  id='projects-list'
                >
                  {projects.map((project) => (
                    <ItemProject
                      key={project.attributes.Name}
                      id={project.id.toString()}
                      Name={project.attributes.Name}
                      Description={project.attributes.Description}
                    />
                  ))}
                </div>
              </section>
            ) : '')
          )}
        </section>
      </>
    </Page>
  );
};

export default homePage;