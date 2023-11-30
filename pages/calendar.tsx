import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { getEvents, getPastEvents } from '../lib/api';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

interface eventsProps {
  events: eventInnerProps[]
  pastEvents: eventInnerProps[]
}

interface eventInnerProps {
  name: string,
  datetime: string,
  price: string,
  description: string
}

const calendarPage: NextPage<eventsProps> = ({ events, pastEvents }) => {
  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/\n/g, "<br />");
    return outputString;
  }
  function stringWithUrlSupport(inputString: string) {
    var outputString = inputString.trim().toString().toLowerCase().replace(/\s+/g, '-').replace(/ - /g, "-").replace(/---/g, "-").replace(/\&/g, "and").replace(/;/g, "%3B").replace(/:/g, "%3A").replace(/"/g, "%22").replace(/'/g, "%27").replace(/,/g, "%2C").replace(/\?/g, "%3F").replace(/!/g, "%21").replace(/@/g, "%40").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/&/g, "%26").replace(/\*/g, "%2A").replace(/=/g, "%3D").replace(/\+/g, "%2B").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\\/g, "%5C").replace(/\//g, "%2F");
    return outputString;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Calendar" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="calendar" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center px-9">
        <section id="calendar">
          <section className="max-md:mt-10 md:mt-20 mb-10 max-w-[1000px] text-left">
            <h1 className="mb-4">Calendar</h1>
          </section>
        </section>

        <section id="events">
          <div className="mb-28 max-w-[1000px] w-full overflow-hidden flex flex-row flex-wrap gap-x-8 gap-y-8 items-top justify-center text-center text-xl">
            {events
              .slice(1)
              .map(({ name, datetime, price, description }) => (
                <article
                  className="bg-[#1c1c1a] rounded-t-md overflow-hidden w-full max-w-full xl:max-w-[500px]"
                  key={name}
                  id={stringWithUrlSupport(name)}
                >
                  <h3 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center font-bold text-3xl px-5 max-sm:hyphens-auto">{name}</h3>
                  <p className="bg-ariWhite text-ariBlack max-sm:hyphens-auto text-2xl px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(datetime) }} />
                  <p className="bg-ariWhite text-ariBlack py-4 max-sm:hyphens-auto text-2xl px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(price) }} />
                  <p className="my-4 max-sm:hyphens-auto text-left px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(description) }} />
                </article>
              ))}
          </div>
        </section>

        <section id="past">
          <h2 className="mb-4">Past Events</h2>
          <div className="mb-28 max-w-[1000px] w-full overflow-hidden flex flex-row flex-wrap gap-x-8 gap-y-8 items-top justify-center text-center text-xl">
            {pastEvents
              .slice(1)
              .map(({ name, datetime }) => (
                <article
                  className="bg-[#1c1c1a] rounded-md overflow-hidden w-full max-w-full xl:max-w-[500px]"
                  key={name}
                  id={stringWithUrlSupport(name)}
                >
                  <h3 className="bg-ariWhite text-ariBlack flex items-center justify-center font-bold text-3xl p-5 max-sm:hyphens-auto">{name}</h3>
                  <p className="bg-ariWhite text-ariBlack flex items-center justify-center max-sm:hyphens-auto text-2xl pb-5 px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(datetime) }} />
                </article>
              ))}
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default calendarPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const events = await getEvents();
  const pastEvents = await getPastEvents();

  return {
    props: {
      events,
      pastEvents
    }
  };
};