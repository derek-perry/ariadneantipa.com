import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';

const aboutPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="About Ariadne Antipa" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="about" image="" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="about">
          <div className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4">Biography</h1>
            <p className="text-xl">Recognized for her creative programming and “exquisitely played” concerts (The Brook Center of New York), Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She has toured the United States and several countries throughout Europe and Africa as a performer and pedagogue. She received first place in many competitions including the Ann Krusche Piano Competition, the Rochester International School of Music & Arts Competition, and the King’s Peak International Music Competition, and was a semi-finalist for the 2020 Astral Artist award. She has appeared as concerto soloist with the Central Valley Youth Symphony, Sacramento State Symphony, and most recently with the University of South Florida Wind Ensemble, performing Gershwin’s Rhapsody in Blue. She was featured in a live-radio broadcast on Tampa’s WSMR and Cincinnati’s WVXU classical stations and is regularly invited back to play on concert series across the country. She has performed as a soloist and collaborator in venues across the globe, including the Centro Municipal Integrado Pumarín (Spain), the Faye Spanos Concert Hall (United States), and the Château de Fontainebleau (France).</p>
            <p className="mt-2">Ariadne is committed to collaborating with living composers and performing works of both celebrated and unfamiliar composers. Her projects include the Midwest premiere and recording of “Six Preludes After Chopin” by CCM’s Professor Miguel Roig-Francoli and participation in composer Tyler Kline’s commissioning consortium for Orchard, an album of 50 short solo piano pieces inspired by fruit, available on Neuma Records. Ariadne chooses each concert program with care, providing audiences a varied selection of music representing diverse backgrounds, time-periods, and familiarity. She is particularly devoted to sharing the music of 20th century Armenian composer Arno Babadjanian, an immensely creative composer whose music is seldom heard in the United States.</p>
            <p className="mt-2">Ariadne is founder and curator for Flight88, a newly-launched series hosted by the Cincinnati brewery Urban Artifact. Aiming to appeal to both newcomers and seasoned classical music lovers alike, Flight88 offers bi-weekly concerts where audiences casually listen, sip, and engage with each other, as well as a quarterly concert schedule for large-scale, formal performances. Flight88’s second season began on Tuesday, September 5, 2023. For more information, please visit Flight88’s Facebook page at <LinkExternal className="max-sm:break-all" href="https://facebook.com/flight88music" title="Visit the Flight88 Facebook page at facebook.com/flight88music">facebook.com/flight88music</LinkExternal>.</p>
            <p className="mt-2">An advocate for social justice, Ariadne commissioned Dr. Brian Raphael Nabors to compose a choral work focused on race in America, using poetry and participants’ personal stories to convey a message relevant in today’s world. The finished product is a virtual choir piece in four movements, with over 30 singers from around the world.</p>
            <p className="mt-2">Ariadne holds a BM in Piano Performance from the Eastman School of Music where she studied with Ms. Rebecca Penneys, an MM in Piano Performance and Pedagogy from the University of Michigan where she studied with Dr. Logan Skelton, and DMA in Piano Performance with a minor in Choral Conducting from the University of Cincinnati’s College-Conservatory of Music where she studied with Dr. Ran Dank. Among her former teachers are Dr. Lorna Peters, Mr. Richard Cionco, and Dr. Natsuki Fukasawa.</p>
            <p className="mt-2">As a teacher, Ariadne maintains a vibrant private studio of in-person and online students from across the country. Her students have scored in the highest percentile for RCM exams and have been accepted into college and pre-college music programs with scholarship. At the collegiate level, Ariadne was a Graduate Teaching Assistant at the University of Cincinnati and at the University of Michigan, and has served as Adjunct Faculty member at Wilmington College in Wilmington, Ohio. Ariadne is the choir director for the Holy Trinity-St. Nicholas Greek Orthodox Church in Finneytown, Ohio.</p>
          </div>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default aboutPage;