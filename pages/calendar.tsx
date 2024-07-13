import React from 'react';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import api from '../lib/config';
import { eventProps } from '../lib/api';
import Page from '../components/Page';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const calendarPage: NextPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<eventProps[]>([]);
  const [pastEvents, setPastEvents] = useState<eventProps[]>([]);
  const [isLoadingUpcomingEvents, setIsLoadingUpcomingEvents] = useState(false);
  const [isLoadingPastEvents, setIsLoadingPastEvents] = useState(false);

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

      const getPastEvents = async () => {
        try {
          setIsLoadingPastEvents(true);
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
          setPastEvents(fetchedData);
        } catch (error: any) {
          if (error?.response?.data) {
            console.error(error?.response?.data.error?.message);
          };
        } finally {
          setIsLoadingPastEvents(false);
        };
      };

      getUpcomingEvents();
      getPastEvents();
    }, []
  );

  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString?.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  return (
    <Page
      title='Calendar - Ariadne Antipa'
      description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
      url='calendar'
      image=''
    >
      <>
        <h1>Calendar</h1>
        {isLoadingUpcomingEvents ? (
          <h2 className='mt-12'>Loading Upcoming Events...</h2>
        ) : (
          (upcomingEvents ? (
            <section
              className='mt-12 flex flex-col gap-4 text-center'
              id='upcoming-events-container'
            >
              <h2 id='upcoming-events'>Upcoming Events</h2>
              <div
                className='flex flex-col gap-4 justify-center align-middle items-center text-center'
                id='upcoming-events-list'
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
        {isLoadingPastEvents ? (
          <h2 className='mt-12'>Loading Past Events...</h2>
        ) : (
          (pastEvents ? (
            <section
              className='mt-12 flex flex-col gap-4 text-center'
              id='past-events-container'
            >
              <h2 id='past-events'>Past Events</h2>
              <div
                className='flex flex-col gap-4 justify-center align-middle items-center text-center'
                id='past-events-list'
              >
                {pastEvents.map((pastEvent) => (
                  <ButtonInternal
                    className='max-w-[600px] w-full'
                    href={`event/${pastEvent.attributes.Name}?id=${pastEvent.id}`}
                    title={pastEvent.attributes.Name}>
                    <article
                      key={pastEvent.attributes.Name}
                    >
                      <h3 className='py-2 font-bold text-3xl max-sm:hyphens-auto'>{pastEvent.attributes.Name}</h3>
                      {pastEvent.attributes.Price ? (<p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(pastEvent.attributes.Price) }} />) : ''}
                    </article>
                  </ButtonInternal>
                ))}
              </div>
            </section>
          ) : '')
        )}
      </>
    </Page>
  );
};

export default calendarPage;