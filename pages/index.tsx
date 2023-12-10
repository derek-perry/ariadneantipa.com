import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import Hero from '../components/Hero';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';
import LinkInternal from '../components/Links/LinkInternal';

const homePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="" image="" />
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
            </div>
          </section>

          <section id="projects">
            <h2 className="mb-4">Projects</h2>
            <div className="max-w-[520px] w-full overflow-hidden flex flex-row flex-wrap gap-8 items-top justify-center text-center text-xl">
            </div>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default homePage;