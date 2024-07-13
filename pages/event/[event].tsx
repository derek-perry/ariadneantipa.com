import { GetServerSideProps, NextPage } from 'next';
import { ToWords } from 'to-words';
import { apiGetEvent, eventProps } from '../../lib/api';
import Page from '../../components/Page';
import LinkInternal from '../../components/Links/LinkInternal';

const toWords = new ToWords({
  localeCode: 'en-US',
  converterOptions: {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false
  }
});

interface IEventPageProps {
  event: eventProps;
  prevUrl: string | undefined;
};

const EventPage: NextPage<IEventPageProps> = ({ event, prevUrl }) => {
  const checkNumberName = (dirtyName: string) => {
    let parsedName = parseInt(dirtyName);
    if (isNaN(parsedName)) {
      return dirtyName;
    } else {
      let words = toWords.convert(parsedName);
      return encodeURIComponent(words);
    };
  };

  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  return (
    <>
      {event && event.attributes.Name ? (
        <Page
          title={`${event.attributes.Name} - Ariadne Antipa`}
          description={event.attributes.Description ? event.attributes.Description : 'AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'}
          url={`event/${checkNumberName(event.attributes.Name)}`}
          image={event.attributes.Image?.data ? event.attributes.Image.data?.attributes.url : ``}
        >
          <article
            className='max-w-[1000px]'
            id={checkNumberName(event.attributes.Name)}
          >
            {prevUrl && (prevUrl === 'http://localhost:3000/calendar' || prevUrl === 'https://ariadneantipa.netlify.app/calendar' || prevUrl === 'https://ariadneantipa.com/calendar') ? (
              <div
                className='mb-8'
              >
                <LinkInternal
                  title='Back to Calendar'
                  href='calendar'
                >
                  &larr; Back to Calendar
                </LinkInternal>
              </div>
            ) : ''}
            {event.attributes.Image?.data ? (
              <div className='mb-8 min-w-auto'>
                <img
                  alt={event.attributes.Image?.data?.attributes.alternativeText}
                  src={event.attributes.Image?.data?.attributes.url ? event.attributes.Image?.data?.attributes.url : ''}
                  height={event.attributes.Image?.data?.attributes.height ? event.attributes.Image?.data?.attributes.height : 0}
                  width={event.attributes.Image?.data?.attributes.width ? event.attributes.Image?.data?.attributes.width : 0}
                />
              </div>
            ) : ''}
            <h1 className='mb-4 max-sm:hyphens-auto'>{event.attributes.Name}</h1>
            <p className='mt-2 max-sm:hyphens-auto text-2xl' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(event.attributes.Date) }} />
            <p className='my-4 max-sm:hyphens-auto text-2xl' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(event.attributes.Price) }} />
            <p className='mt-4 max-sm:hyphens-auto text-left' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(event.attributes.Description) }} />
          </article>
        </Page>
      ) :
        (
          <Page
            title='Event Not Found - Ariadne Antipa'
            description='AriadneAntipa.com is the official website for Ariadne Antipa - Pianist, Educator, and Conductor'
            url='event/not-found'
            image=''
          >
            <article
              className='max-w-[680px]'
              id='event-not-found'
            >
              <h1 className='mb-4 max-sm:hyphens-auto'>Error 404: Event Not Found</h1>
              <p className='mt-2 max-sm:hyphens-auto text-2xl'>The event you are looking for has moved, is no longer available, has been archived, or was not valid.</p>
            </article>
          </Page>
        )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await apiGetEvent.get(
      (context?.query?.id as string) || '0'
    );
    return {
      props: {
        event: response.data.data,
        prevUrl: context.req.headers.referer ?? ''
      }
    };
  } catch (e) {
    return {
      props: {
        event: null,
        prevUrl: context.req.headers.referer ?? ''
      }
    };
  };
};

export default EventPage;
