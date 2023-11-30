import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';

const recordingsPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Ariadne Antipa's Recordings" description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url="recordings" />

      <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center">
        <section id="recordings">
          <section className="px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left">
            <h1 className="mb-4">Recordings</h1>
            <div className="flex max-md:flex-col md:flex-row md:flex-wrap gap-y-2">
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/cjCEEFTmJWI"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Auerbach Preludes 2 and 16 - Ariadne Antipa, piano"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/G9nGZw7xQws"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Bolcom 12 New Etudes: X. Vers le silence - Ariadne Antipa, piano"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/ozzC8YJHL8U"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Clara Schumann, Variations on a theme by Robert Op. 20. Ariadne Antipa, pianist"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/-uRAVJbTvZU"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Scarlatti Sonata K. 141 in D Minor, pianist Ariadne Antipa"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/lt4WinmyhE0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Bach-Busoni Chaconne in D Minor BWV 1004 - Ariadne Antipa"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/SjrBue2AfdE"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title='Babadjanian "Six Pictures" Ariadne Antipa, pianist'
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/1G9johrYq-E"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Andrea Clearfield's Into the Falcon's Eye"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/6rgDCQv76Js"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Logan Skelton's Letters to Santa"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
              <div className="flex flex-col mx-auto md:max-w-[708px]">
                <iframe
                  src="https://youtube.com/embed/MJMLBn2jmVU"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Sonata for Two Pianos and Percussion - Béla Bartók"
                  className="rounded-md min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px] md:w-full lg:w-full"
                />
              </div>
            </div>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default recordingsPage;