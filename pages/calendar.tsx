import React from 'react';
import { useEffect, useState } from 'react';
import api from '../lib/config';
import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

interface eventProps {
  Name: string,
  StartTime: string,
  EndTime: string,
  Price: string,
  Description: string,
  Image: eventImageProps
};

interface eventImageProps {
  data: {
    attributes: {
      name: string;
      alternativeText: string;
      url: string;
      width: number;
      height: number;
      formats: {
        large: {
          url: string;
          width: number;
          height: number;
        };
        small: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        thumbnail: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  } | null;
};

const calendarPage: NextPage = () => {
  const [events, setEvents] = useState<eventProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const getElements = async () => {
        try {
          setIsLoading(true);
          const fetchedData = [];
          const { data } = await api.get(
            'ari-events?pagination[page]=1&pagination[pageSize]=10&sort[0]=name:asc&populate[Image][fields][0]=height&populate[Image][fields][1]=width&populate[Image][fields][2]=url&fields[0]=Name&fields[1]=Description&fields[2]=Price&fields[3]=StartTime&fields[4]=EndTime'
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
                `ari-events?pagination[page]=${i}&pagination[pageSize]=10&sort[0]=name:asc&populate[Image][fields][0]=height&populate[Image][fields][1]=width&populate[Image][fields][2]=url&fields[0]=Name&fields[1]=Description&fields[2]=Price&fields[3]=StartTime&fields[4]=EndTime`
              );
              fetchedData.push(...response.data.data);
            };
          };
          setEvents(fetchedData);
        } catch (error: any) {
          if (error?.response?.data) {
            console.error(error?.response?.data.error?.message);
          };
        } finally {
          setIsLoading(false);
        };
      };

      getElements();
    }, []
  );

  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };
  function stringWithUrlSupport(inputString: string) {
    var outputString = inputString.trim().toString().toLowerCase().replace(/\s+/g, '-').replace(/ - /g, "-").replace(/---/g, "-").replace(/\&/g, "and").replace(/;/g, "%3B").replace(/:/g, "%3A").replace(/"/g, "%22").replace(/'/g, "%27").replace(/,/g, "%2C").replace(/\?/g, "%3F").replace(/!/g, "%21").replace(/@/g, "%40").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/&/g, "%26").replace(/\*/g, "%2A").replace(/=/g, "%3D").replace(/\+/g, "%2B").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\\/g, "%5C").replace(/\//g, "%2F");
    return outputString;
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Calendar" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="calendar" image="" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center px-9">
        <section id="calendar">
          <section className="max-md:mt-10 md:mt-20 mb-10 max-w-[1000px] text-left">
            <h1 className="mb-4">Calendar</h1>
          </section>
        </section>

        <section id="events">
          <h2 className="mb-4">Upcoming Events</h2>
          <div className="mb-28 max-w-[1080px] w-full overflow-hidden flex flex-row flex-wrap gap-16 items-top justify-center text-center text-xl">
            {isLoading ? (
              <p>Loading Elements...</p>
            ) : (events && events.length ?
              (events
                .slice(1)
                .map(({ Name, StartTime, EndTime, Price, Description, Image }) => (
                  <article
                    className="bg-[#1c1c1a] rounded-t-md overflow-hidden w-full max-w-full"
                    key={Name}
                    id={stringWithUrlSupport(Name)}
                  >
                    {Image.data ? (
                      <div className='min-w-auto max-w-[240px] sm:min-w-[300px] sm:max-w-[300px] p-3'>
                        <img
                          className='shadow-musicCard'
                          alt={Image.data?.attributes.alternativeText}
                          src={Image.data?.attributes.url ? Image.data?.attributes.url : ''}
                          height={Image.data?.attributes.height ? Image.data?.attributes.height : 0}
                          width={Image.data?.attributes.width ? Image.data?.attributes.width : 0}
                        />
                      </div>
                    ) : ''}
                    <h3 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center font-bold text-3xl px-5 max-sm:hyphens-auto">{Name}</h3>
                    <p className="pt-2 bg-ariWhite text-ariBlack max-sm:hyphens-auto text-2xl px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(StartTime) }} />
                    <p className="pt-2 bg-ariWhite text-ariBlack max-sm:hyphens-auto text-2xl px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(EndTime) }} />
                    <p className="bg-ariWhite text-ariBlack py-4 max-sm:hyphens-auto text-2xl px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Price) }} />
                    <p className="my-4 max-sm:hyphens-auto text-left px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Description) }} />
                  </article>
                )))
              : (
                <article className="bg-[#1c1c1a] rounded-md overflow-hidden w-full max-w-full" id='no-events'><h3 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center font-bold text-3xl px-5 max-sm:hyphens-auto">No Upcoming Events</h3></article>
              )
            )}
          </div>
        </section>

        {/* <section id="past">
          <h2 className="mb-4">Past Events</h2>
          <div className="mb-28 max-w-[1000px] w-full overflow-hidden flex flex-row flex-wrap gap-x-8 gap-y-8 items-top justify-center text-center text-xl">
          </div>
        </section> */}
      </main>

      <PageFooter />
    </div>
  );
};

export default calendarPage;