import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import Hero from '../components/Hero';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';

const homePage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="" />
      <Hero />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section className="py-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
          <section id="contact" className="pt-10 mb-20 max-w-[1000px] text-left">
            <h1 className="mb-4 text-4xl max-sm:break-all">AriadneAntipa.com</h1>
            <p className="text-xl">If you’d like to book Ariadne Antipa to play for your event, inquire about piano lessons, or have any other questions, send an email to <LinkExternal className="max-sm:break-all" href="mailto:contact@ariadneantipa.com" title="Contact Ariadne Antipa via Email at Contact@AriadneAntipa.com">Contact@AriadneAntipa.com</LinkExternal></p>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default homePage;