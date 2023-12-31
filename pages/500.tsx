import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

const error500Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 500: Internal Server Error" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="500" image="" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="500">
          <div className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4 text-red-600">Error 500: Internal Server Error</h1>
            <p className="text-xl">The server encountered an internal error or misconfiguration and was unable to complete your request.</p>
          </div>
        </section>
      </main>

      <PageFooter />
    </div>
  );
};

export default error500Page;