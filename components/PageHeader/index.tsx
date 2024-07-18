import { FC } from 'react';
import LinkInternal from '../Links/LinkInternal';
import NavMenu from '../NavMenu';

interface IPageHeaderProps {
  prevUrl?: string | null;
}

const PageHeader: FC<IPageHeaderProps> = ({
  prevUrl
}): JSX.Element => {
  return (
    <>
      <header id='header' role='banner' className='border-b border-ariGold bg-ariBlack text-white py-3 text-lg w-full'>
        <div className='px-8 w-full gap-y-10 flex flex-row justify-between align-middle items-middle text-left'>
            <LinkInternal
              title='Ariadne Antipa'
              href=''
              className='no-underline hover:!underline'
            >
              <p className='CormorantInfant text-2xl'><strong>Ariadne Antipa</strong></p>
            </LinkInternal>
          <div className='max-[1076px]:hidden gap-7 flex flex-row justify-left align-middle items-middle text-left'>
            <LinkInternal href='' title='Home'>Home</LinkInternal>
            <LinkInternal href='about' title='Biography'>Biography</LinkInternal>
            <LinkInternal href='calendar' title='Calendar'>Calendar</LinkInternal>
            <LinkInternal href='photos' title='Photos'>Photos</LinkInternal>
            <LinkInternal href='recordings' title='Recordings'>Recordings</LinkInternal>
            <LinkInternal href='projects' title='Projects'>Projects</LinkInternal>
            <LinkInternal href='teaching-philosophy' title='Teaching Philosophy'>Teaching Philosophy</LinkInternal>
            <LinkInternal href='contact' title='Contact'>Contact</LinkInternal>
          </div>
          <div className='min-[1076px]:hidden'><NavMenu /></div>
        </div>
      </header>
      {prevUrl && (prevUrl === 'http://localhost:3000/calendar' || prevUrl === 'https://ariadneantipa.netlify.app/calendar' || prevUrl === 'https://ariadneantipa.com/calendar') ? (
        <div
          className='pt-4 px-8 bg-ariBlack w-full flex justify-left align-top items-left text-left text-lg'
        >
          <LinkInternal
            title='Back to Calendar'
            href='calendar'
          >
            &larr; Back to Calendar
          </LinkInternal>
        </div>
      ) : (
        (prevUrl && (prevUrl === 'http://localhost:3000/projects' || prevUrl === 'https://ariadneantipa.netlify.app/projects' || prevUrl === 'https://ariadneantipa.com/projects') ? (
          <div
            className='pt-4 px-8 bg-ariBlack w-full flex justify-left align-top items-left text-left text-lg'
          >
            <LinkInternal
              title='Back to Projects'
              href='projects'
            >
              &larr; Back to Projects
            </LinkInternal>
          </div>
        ) : (
          (prevUrl && (prevUrl === 'http://localhost:3000/' || prevUrl === 'https://ariadneantipa.netlify.app/' || prevUrl === 'https://ariadneantipa.com/') ? (
            <div
              className='pt-4 px-8 bg-ariBlack w-full flex justify-left align-top items-left text-left text-lg'
            >
              <LinkInternal
                title='Back'
                href=''
              >
                &larr; Back
              </LinkInternal>
            </div>
          ) : '')
        ))
      )}
    </>
  );
};

export default PageHeader;