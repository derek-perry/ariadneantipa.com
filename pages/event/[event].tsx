import { GetServerSideProps, NextPage } from 'next';
import { getEvent, eventInnerProps } from '../../lib/api';
import SiteHead from '../../components/SiteHead';
import PageFooter from '../../components/PageFooter';

type eventProps = {
  event: eventInnerProps
};

const eventPage: NextPage<eventProps> = ({ event }) => {
  function makeSlug(nameDirty: string) {
    if (nameDirty == null || nameDirty == undefined || nameDirty == '') {
      var slug = '';
    }
    else {
      var nameClean = nameDirty.trim().toString().toLowerCase().replace(/\s+/g, '-').replace(/ - /g, "-").replace(/---/g, "-").replace(/\&/g, "and").replace(/;/g, "%3B").replace(/:/g, "%3A").replace(/"/g, "%22").replace(/'/g, "%27").replace(/,/g, "%2C").replace(/\?/g, "%3F").replace(/!/g, "%21").replace(/@/g, "%40").replace(/#/g, "%23").replace(/\$/g, "%24").replace(/&/g, "%26").replace(/\*/g, "%2A").replace(/=/g, "%3D").replace(/\+/g, "%2B").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\[/g, "%5B").replace(/\]/g, "%5D").replace(/\\/g, "%5C").replace(/\//g, "%2F");
      var slug = nameClean;
    }
    return slug;
  };
  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <SiteHead title={`${'name'} - Ariadne Antipa`} description="AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor" url={`event/${makeSlug('name')}`} image="" />

        <main className="bg-ariBlack text-ariWhite w-full flex flex-1 flex-col text-center items-center justify-center px-9">
          <article
            className="overflow-hidden w-full max-w-[1000px]"
            id={makeSlug('name')}
          >
            <h1 className="px-5 mb-4 max-sm:hyphens-auto">{'name'}</h1>
            <p className="pt-2 px-5 max-sm:hyphens-auto text-2xl" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks('datetime') }} />
            <p className="py-4 px-5 max-sm:hyphens-auto text-2xl" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks('price') }} />
            <p className="my-4 px-5 max-sm:hyphens-auto text-left" dangerouslySetInnerHTML={{ __html: stringWithLineBreaks('description') }} />
          </article>
        </main>

        <PageFooter />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const responseEvent = await getEvent.get(
      (context?.query?.id as string) || '0'
    );
    return {
      props: {
        event: responseEvent
      }
    };
  } catch (e) {
    return {
      props: {
        event: null
      }
    };
  }
};

export default eventPage;
