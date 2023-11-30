import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';

const contactPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Contact Ariadne Antipa" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="contact" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="contact">
          <div className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4">Get in Contact</h1>
            <p className="text-xl">If you’d like to book Ariadne Antipa to play for your event, inquire about piano lessons, or have any other questions, send an email to <LinkExternal className="max-sm:break-all" href="mailto:contact@ariadneantipa.com" title="Contact Ariadne Antipa via Email at Contact@AriadneAntipa.com">Contact@AriadneAntipa.com</LinkExternal></p>
          </div>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default contactPage;