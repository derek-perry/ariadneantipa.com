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
    <div className='bg-ariBlack w-full'>
      <header id='header' role='banner' className='border-b border-ariGold bg-ariBlack text-white py-3 text-lg w-full'>
        <div className='px-8 w-full max-w-[1076px] m-auto gap-x-4 gap-y-10 flex flex-row justify-between align-middle items-middle text-left'>
          <LinkInternal
            title='Ariadne Antipa'
            href=''
            className='no-underline hover:!underline'
          >
            <p className='CormorantInfant text-2xl'><strong>Ariadne Antipa</strong></p>
          </LinkInternal>
          <div className='max-[969px]:hidden mt-1 gap-7 flex flex-row justify-left align-middle items-middle text-left text-base'>
            <LinkInternal href='about' title='Biography' className='no-underline hover:!underline'>Biography</LinkInternal>
            <LinkInternal href='calendar' title='Calendar' className='no-underline hover:!underline'>Calendar</LinkInternal>
            <LinkInternal href='photos' title='Photos' className='no-underline hover:!underline'>Photos</LinkInternal>
            <LinkInternal href='recordings' title='Recordings' className='no-underline hover:!underline'>Recordings</LinkInternal>
            <LinkInternal href='projects' title='Projects' className='no-underline hover:!underline'>Projects</LinkInternal>
            <LinkInternal href='teaching-philosophy' title='Teaching Philosophy' className='no-underline hover:!underline'>Teaching Philosophy</LinkInternal>
            <LinkInternal href='contact' title='Contact' className='no-underline hover:!underline'>Contact</LinkInternal>
          </div>
          <div className='min-[969px]:hidden flex flex-row justify-left align-middle items-middle'><NavMenu /></div>
        </div>
      </header>
      {prevUrl && (prevUrl === 'http://localhost:3000/calendar' || prevUrl === 'https://ariadneantipa.netlify.app/calendar' || prevUrl === 'https://ariadneantipa.com/calendar') ? (
        <div
          className='pt-4 px-8 bg-ariBlack w-full max-w-[1076px] m-auto flex justify-left align-top items-left text-left text-lg'
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
            className='pt-4 px-8 bg-ariBlack w-full max-w-[1076px] m-auto flex justify-left align-top items-left text-left text-lg'
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
              className='pt-4 px-8 bg-ariBlack w-full max-w-[1076px] m-auto flex justify-left align-top items-left text-left text-lg'
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
    </div>
  );
};

export default PageHeader;