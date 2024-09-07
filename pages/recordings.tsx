import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Video from '../components/Video';
import Image from 'next/image';
import LinkExternal from '../components/Links/LinkExternal';

const RecordingsPage: NextPage = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ? process.env.NEXT_PUBLIC_SITE_URL : 'https://ariadneantipa.com';

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <SiteHead title="Ariadne Antipa's Recordings" description='Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.' url='recordings' image='' />
      <PageHeader />
      <main className='bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center'>
        <section id='recordings'>
          <section className='px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1000px] text-left'>
            <h1>Recordings</h1>
              <div className='flex flex-row max-sm:flex-col max-sm:text-center max-sm:items-center max-sm:justify-center gap-4 w-auto my-6 p-6 bg-ariBlackDark rounded'>
                <Image src={(siteUrl + '/youtube.svg')} alt='' aria-hidden='true' height={50} width={50} />
                <p><span className='text-white !no-underline'>See all of Ariadne’s videos:</span> <br /><LinkExternal href='https://youtube.com/@AriadneAntipa' title=''><span className='max-sm:break-all'>youtube.com/@AriadneAntipa</span></LinkExternal></p>
              </div>
            <div className='flex max-md:flex-col md:flex-row md:flex-wrap gap-3'>
              <Video
                title='Auerbach Preludes 2 and 16 - Ariadne Antipa, piano'
                url='cjCEEFTmJWI'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title='Bolcom 12 New Etudes: X. Vers le silence - Ariadne Antipa, piano'
                url='G9nGZw7xQws'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title='Clara Schumann, Variations on a theme by Robert Op. 20. Ariadne Antipa, pianist'
                url='ozzC8YJHL8U'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title='Scarlatti Sonata K. 141 in D Minor, pianist Ariadne Antipa'
                url='-uRAVJbTvZU'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title='Bach-Busoni Chaconne in D Minor BWV 1004 - Ariadne Antipa'
                url='lt4WinmyhE0'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title="Babadjanian 'Six Pictures' Ariadne Antipa, pianist"
                url='SjrBue2AfdE'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title="Andrea Clearfield's Into the Falcon's Eye"
                url='1G9johrYq-E'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title="Logan Skelton's Letters to Santa"
                url='6rgDCQv76Js'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
              <Video
                title='Sonata for Two Pianos and Percussion - Béla Bartók'
                url='MJMLBn2jmVU'
                classNameIFrame='min-h-[198px] min-[450px]:h-[300px] sm:h-[350px] md:h-[382px]'
              />
            </div>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default RecordingsPage;