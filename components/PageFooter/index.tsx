import LinkInternal from '../Links/LinkInternal';

const PageFooter = (): JSX.Element => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer id='footer' role='contentinfo' className='border-t border-ariGold bg-ariBlack text-white text-xl w-full'>
      <div className='pt-16 pb-12 px-8 flex flex-col gap-y-10 text-center items-center justify-center'>
        <div className='flex flex-row flex-wrap gap-x-9 gap-y-7 text-center items-center justify-center'>
          <LinkInternal href='' title='Home'>Home</LinkInternal>
          <LinkInternal href='about' title='Biography'>Biography</LinkInternal>
          <LinkInternal href='calendar' title='Calendar'>Calendar</LinkInternal>
          <LinkInternal href='photos' title='Photos'>Photos</LinkInternal>
          <LinkInternal href='recordings' title='Recordings'>Recordings</LinkInternal>
          <LinkInternal href='projects' title='Projects'>Projects</LinkInternal>
          <LinkInternal href='teaching-philosophy' title='Teaching Philosophy'>Teaching Philosophy</LinkInternal>
          <LinkInternal href='contact' title='Contact'>Contact</LinkInternal>
        </div>
        <div className='flex flex-row flex-wrap gap-x-[621px] gap-y-4 text-center items-center justify-center text-ariWhite'>
          <p> © {currentYear} Ariadne Antipa</p>
          <LinkInternal href='privacy' title='Privacy Policy'>Privacy Policy</LinkInternal>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;