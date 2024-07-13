import { FC } from 'react';
import SiteHead from '../../components/SiteHead';
import PageFooter from '../../components/PageFooter';

interface IPageProps {
  children?: JSX.Element[] | JSX.Element;
  title: string | null;
  description: string | null;
  url: string | null;
  image: string | null;
  classNameMain?: string | null;
}

const Page: FC<IPageProps> = ({
  children,
  title,
  description,
  url,
  image,
  classNameMain
}): JSX.Element => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <SiteHead
        title={title ? title : 'Ariadne Antipa'}
        description={description ? description : 'AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'}
        url={url ? url : ''}
        image={image ? image : ''}
      />
      <main className={'bg-ariBlack text-ariWhite w-full flex flex-1 flex-col items-center justify-center px-8 max-md:pt-10 md:pt-20 pb-20 ' + classNameMain}>
        {children}
      </main>
      <PageFooter />
    </div>
  );
};

export default Page;