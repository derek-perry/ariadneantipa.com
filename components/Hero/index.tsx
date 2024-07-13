const Hero = (): JSX.Element => {
  return (
    <section id='hero' className='w-full bg-ariBlack border-b border-ariGold'>
      <div id='hero-container' className='w-full max-w-[1000px] m-auto'>
        <div id='hero-content' className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col justify-center md:h-[666px] max-md:bg-bottom md:bg-right bg-contain bg-local bg-no-repeat max-md:bg-[url('/bg-mobile.png')] md:bg-[url('/bg-desktop.png')]">
          <div className='flex flex-col max-md:text-center md:text-left px-8'>
            <h1 className='CormorantInfant max-md:mt-20 md:mt-2 mb-2 font-light text-6xl'>Ariadne Antipa</h1>
            <span className='mt-4 max-md:mb-[550px] md:mb-2 text-lg'>Pianist | Educator | Conductor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;