import type { NextPage } from 'next';
import Page from '../components/Page';

const error500Page: NextPage = () => {
  return (
    <Page
      title='Error 500: Internal Server Error - Ariadne Antipa'
      description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
      url='500'
      image=''
    >
      <article
        className='max-w-[760px]'
        id='internal-server-error'
      >
        <h1 className='mb-4 max-sm:hyphens-auto'>Error 500: Internal Server Error</h1>
        <p className='mt-2 max-sm:hyphens-auto text-2xl'>The server encountered an internal error or misconfiguration and was unable to complete your request.</p>
      </article>
    </Page>
  );
};

export default error500Page;