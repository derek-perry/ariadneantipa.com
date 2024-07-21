import type { NextPage } from 'next';
import Image from 'next/image';
import SiteHead from '../components/SiteHead';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';

const photosPage: NextPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <SiteHead title="Ariadne Antipa's Photos" description='Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.' url='photos' image='' />
      <PageHeader />
      <main className='bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center'>
        <section id='photos'>
          <section className='px-9 max-md:mt-10 md:mt-20 mb-28 max-w-[1050px] text-left'>
            <h1 className='mb-4'>Photos</h1>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa18.jpg' || './AriadneAntipa18.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa0.jpg' || './AriadneAntipa0.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa2.jpg' || './AriadneAntipa2.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa3.jpg' || './AriadneAntipa3.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa17.jpg' || './AriadneAntipa17.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa10.jpg' || './AriadneAntipa10.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa1.jpg' || './AriadneAntipa1.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa8.jpg' || './AriadneAntipa8.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa16.jpg' || './AriadneAntipa16.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa19.jpg' || './AriadneAntipa19.jpg'}
                width={488}
                height={274}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa14.jpg' || './AriadneAntipa14.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa13.jpg' || './AriadneAntipa13.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa15.jpg' || './AriadneAntipa15.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa11.jpg' || './AriadneAntipa11.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa9.jpg' || './AriadneAntipa9.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa4.jpg' || './AriadneAntipa4.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa5.jpg' || './AriadneAntipa5.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa6.jpg' || './AriadneAntipa6.jpg'}
                width={488}
                height={867}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
            <div className='flex max-md:flex-col md:flex-row'>
              <Image
                src={process.env.NEXT_PUBLIC_SITE_URL + '/AriadneAntipa7.jpg' || './AriadneAntipa7.jpg'}
                width={976}
                height={1777}
                alt='Ariadne Antipa'
                className='bg-ariBlack text-center flex items-center justify-center align-middle break-all overflow-auto'
              />
            </div>
          </section>
        </section>
      </main>

      <PageFooter />
    </div >
  );
};

export default photosPage;