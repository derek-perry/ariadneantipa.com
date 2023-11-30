import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { getProjects } from '../lib/api';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

interface itemProps {
  projects: projectInnerProps[]
};

interface projectInnerProps {
  name: string,
  description: string
};

const projectsPage: NextPage<itemProps> = ({ projects }) => {
  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/\n/g, "<br />");
    return outputString;
  };
  function stringWithUrlSupport(inputString: string) {
    var outputString = inputString.trim().toString().toLowerCase().replace(/\s+/g, '-').replace(/ - /g, "-").replace(/---/g, "-").replace(/\&/g, "and").replace(/;/g, "%3B").replace(/:/g, "%3A").replace(/"/g, "%22").replace(/'/g, "%27").replace(/,/g, "%2C").replace(/\?/g, "%3F").replace(/!/g, "%21").replace(/@/g, "%40").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/&/g, "%26").replace(/\*/g, "%2A").replace(/=/g, "%3D").replace(/\+/g, "%2B").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\\/g, "%5C").replace(/\//g, "%2F");
    return outputString;
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Projects" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="projects" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center px-9">
        <section id="projects">
          <section className="max-md:mt-10 md:mt-20 mb-10 max-w-[1000px] text-left">
            <h1>Projects</h1>
          </section>
        </section>

        <section id="project-items">
          <div className="mb-28 max-w-[1080px] w-full overflow-hidden flex flex-row flex-wrap gap-16 items-top justify-center text-center text-xl">
            {projects
              .slice(1)
              .map(({ name, description }) => (
                <article
                  className="bg-[#1c1c1a] rounded-t-md overflow-hidden w-full max-w-full"
                  key={name}
                  id={stringWithUrlSupport(name)}
                >
                  <h2 className="bg-ariWhite text-ariBlack min-h-[88px] flex items-center justify-center px-5 mb-3 max-sm:hyphens-auto">{name}</h2>
                  <p className="my-4 max-sm:hyphens-auto text-left px-5" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(description) }} />
                </article>
              ))}
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default projectsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects
    }
  };
};