import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { getEvents, getProjects } from '../lib/api';
import SiteHead from '../components/SiteHead';
import Hero from '../components/Hero';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';
import LinkInternal from '../components/Links/LinkInternal';

interface itemProps {
  events: eventInnerProps[]
  projects: projectInnerProps[]
};

interface eventInnerProps {
  name: string,
  datetime: string
};

interface projectInnerProps {
  name: string
};

const homePage: NextPage<itemProps> = ({ events, projects }) => {
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
      <SiteHead title="Ariadne Antipa" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="" />
      <Hero />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="contact">
          <div className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4 text-4xl max-sm:break-all">Ariadne Antipa</h1>
            <p className="text-xl">If you’d like to book Ariadne Antipa to play for your event, inquire about piano lessons, or have any other questions, send an email to <LinkExternal className="max-sm:break-all" href="mailto:contact@ariadneantipa.com" title="Contact Ariadne Antipa via Email at Contact@AriadneAntipa.com">Contact@AriadneAntipa.com</LinkExternal></p>
          </div>
        </section>

        <section id="eventsandprojects" className="mb-28 flex flex-row flex-wrap gap-x-8 gap-y-20 items-top justify-center text-center">
          <section id="events">
            <h2 className="mb-4">Upcoming Events</h2>
            <div className="max-w-[520px] w-full overflow-hidden flex flex-row flex-wrap gap-x-8 gap-y-8 items-top justify-center text-center text-xl">
              {!events ? (
                <p className="bg-ariWhite text-ariBlack flex items-center justify-center max-sm:hyphens-auto text-2xl pb-5 px-5">Loading Upcoming Events...</p>
              ) : (events.length > 1 ?
                (events
                  .slice(1)
                  .map(({ name, datetime }) => (
                    <article
                      className="bg-[#1c1c1a] rounded-md overflow-hidden w-full max-w-full xl:max-w-[500px]"
                      key={name}
                      id={stringWithUrlSupport(name)}
                    >
                      <h3 className="bg-ariWhite text-ariBlack flex items-center justify-center font-bold text-3xl p-5 max-sm:hyphens-auto">{name}</h3>
                      <p className="bg-ariWhite text-ariBlack flex items-center justify-center max-sm:hyphens-auto text-2xl pb-5 px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(datetime) }} />
                      <div className="bg-ariWhite text-ariBlack text-2xl pb-5 px-5">
                        <LinkInternal href={'calendar#' + stringWithUrlSupport(name)} title={`Read More about ${name}`}>Learn More</LinkInternal>
                      </div>
                    </article>
                  )))
                : (
                  <article className="bg-[#1c1c1a] rounded-t-md overflow-hidden w-full max-w-full" id='no-events'><h3 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center font-bold text-3xl px-5 max-sm:hyphens-auto">No Upcoming Events</h3></article>
                )
              )}
            </div>
          </section>

          <section id="projects">
            <h2 className="mb-4">Projects</h2>
            <div className="max-w-[520px] w-full overflow-hidden flex flex-row flex-wrap gap-8 items-top justify-center text-center text-xl">
              {!projects ? (
                <p className="bg-ariWhite text-ariBlack flex items-center justify-center max-sm:hyphens-auto text-2xl pb-5 px-5">Loading Projects...</p>
              ) : (projects.length > 1 ?
                (projects
                  .slice(1)
                  .map(({ name }) => (
                    <article
                      className="bg-[#1c1c1a] rounded-md overflow-hidden w-full max-w-full lg:max-w-[500px]"
                      key={name}
                      id={stringWithUrlSupport(name)}
                    >
                      <h3 className="bg-ariWhite text-ariBlack flex items-center justify-center font-bold text-3xl p-5 max-sm:hyphens-auto">{name}</h3>
                      <div className="bg-ariWhite text-ariBlack text-2xl pb-5 px-5">
                        <LinkInternal href={'project#' + stringWithUrlSupport(name)} title={`Read More about ${name}`}>Learn More</LinkInternal>
                      </div>
                    </article>
                  )))
                : (
                  <article className="bg-[#1c1c1a] rounded-t-md overflow-hidden w-full max-w-full" id='no-projects'><h3 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center font-bold text-3xl px-5 max-sm:hyphens-auto">No Projects</h3></article>
                )
              )}
            </div>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default homePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const events = await getEvents();
  const projects = await getProjects();

  return {
    props: {
      events,
      projects
    }
  };
};