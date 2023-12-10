import React from 'react';
import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

const projectsPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Projects" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="projects" image="" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center px-9">
        <section id="projects">
          <section className="max-md:mt-10 md:mt-20 mb-10 max-w-[1000px] text-left">
            <h1>Projects</h1>
          </section>
        </section>

        <section id="project-items">
          <div className="mb-28 max-w-[1080px] w-full overflow-hidden flex flex-row flex-wrap gap-16 items-top justify-center text-center text-xl">
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default projectsPage;