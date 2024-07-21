import type { NextPage } from 'next';
import Page from '../components/Page';

const error500Page: NextPage = () => {
  return (
    <Page
      title='Error 500: Internal Server Error - Ariadne Antipa'
      description='Ariadne Antipa is a pianist, conductor, and educator residing in Cincinnati, Ohio. She is recognized for her creative programming and exquisitely played concerts.'
      url='500'
      image=''
    >
      <article
        className='max-w-[760px]'
        id='internal-server-error'
      >
        <h1 className='mb-4'>Error 500: Internal Server Error</h1>
        <p className='mt-2 text-2xl'>The server encountered an internal error or misconfiguration and was unable to complete your request.</p>
      </article>
    </Page>
  );
};

export default error500Page;