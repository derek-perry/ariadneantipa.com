import React from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import api from '../lib/config';
import { eventProps, projectProps } from '../lib/api';
import Page from '../components/Page';
import Hero from '../components/Hero';
import LinkExternal from '../components/Links/LinkExternal';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const homePage: NextPage = () => {
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
            'events?pagination[page]=1&pagination[pageSize]=10&sort[0]=id:desc'
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
                `events?pagination[page]=${i}&pagination[pageSize]=10&sort[0]=id:desc`
              );
              fetchedData.push(...response.data.data);
            };
          };
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
          setProjects(fetchedData);
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

  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString?.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  return (
    <Page
      title='Ariadne Antipa'
      description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
      url=''
      image=''
      classNameMain='!px-0 !pt-0 gap-24'
    >
      <Hero />

      <section
        className='max-w-[500px] text-left px-8'
        id='contact'
      >
        <p>If you’d like to book Ariadne Antipa to play for your event, inquire about piano lessons, or have any other questions, send an email to <LinkExternal className='max-sm:break-all' href='mailto:contact@ariadneantipa.com' title='Contact Ariadne Antipa via Email at Contact@AriadneAntipa.com'>Contact@AriadneAntipa.com</LinkExternal></p>
      </section>

      <section id='eventsandprojects' className='mb-12 px-8 flex flex-row flex-wrap gap-8 items-top justify-center text-center'>
        {isLoadingUpcomingEvents ? (
          <h2>Loading Upcoming Events...</h2>
        ) : (
          (upcomingEvents ? (
            <section>
              <h2 className='mb-4' id='upcoming-events'>Upcoming Events</h2>
              <div
                className='flex flex-col gap-4 justify-center align-middle items-center text-center'
                id='events-list'
              >
                {upcomingEvents.map((upcomingEvent) => (
                  <ButtonInternal
                    className='max-w-[600px] w-full'
                    href={`event/${upcomingEvent.attributes.Name}?id=${upcomingEvent.id}`}
                    title={upcomingEvent.attributes.Name}>
                    <article
                      key={upcomingEvent.attributes.Name}
                    >
                      <h3 className='py-2 font-bold text-3xl max-sm:hyphens-auto'>{upcomingEvent.attributes.Name}</h3>
                      {upcomingEvent.attributes.Price ? (<p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(upcomingEvent.attributes.Price) }} />) : ''}
                    </article>
                  </ButtonInternal>
                ))}
              </div>
            </section>
          ) : '')
        )}

        {isLoadingProjects ? (
          <h2>Loading Projects...</h2>
        ) : (
          (projects ? (
            <section>
              <h2 className='mb-4' id='projects'>Projects</h2>
              <div
                className='flex flex-col gap-4 justify-center align-middle items-center text-center'
                id='projects-list'
              >
                {projects.map((project) => (
                  <ButtonInternal
                    className='max-w-[600px] w-full'
                    href={`project/${project.attributes.Name}?id=${project.id}`}
                    title={project.attributes.Name}>
                    <article
                      key={project.attributes.Name}
                    >
                      <h3 className='py-2 font-bold text-3xl max-sm:hyphens-auto'>{project.attributes.Name}</h3>
                    </article>
                  </ButtonInternal>
                ))}
              </div>
            </section>
          ) : '')
        )}
      </section>
    </Page>
  );
};

export default homePage;