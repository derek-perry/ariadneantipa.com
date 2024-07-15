import { FC } from 'react';
import { eventDayProps } from '../../lib/api';
import ButtonInternal from '../Buttons/ButtonInternal';
import LinkInternal from '../Links/LinkInternal';

interface IItemEventProps {
  id: string;
  Name: string;
  Date: string | null;
  Day: eventDayProps[] | null;
  Price: string | null;
  className?: string;
};

const ItemEvent: FC<IItemEventProps> = ({
  id,
  Name,
  Date,
  Day,
  Price,
  className
}): JSX.Element => {
  function stringWithLineBreaks(inputString: string) {
    var outputString = inputString?.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
    return outputString;
  };

  function formatDate(dateTime: string) {
    if (!dateTime) return '';

    // Regular expression to match ISO 8601 date format
    const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/;
    const match = dateTime.match(regex);

    if (match) {
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const hour = match[4];
      const minute = match[5];

      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthName = monthNames[parseInt(month, 10) - 1];

      const hourInt = parseInt(hour, 10);
      const ampm = hourInt >= 12 ? 'pm' : 'am';
      const hour12 = hourInt % 12 || 12;

      return `${monthName} ${day}, ${year} ${hour12}:${minute}${ampm}`;
    } else {
      return '';
    }
  };

  return (
    <article
      key={Name}
      id={Name}
      className={'w-full max-w-[600px] flex flex-col gap-4 py-4 px-4 bg-ariBlackDark shadow ' + className}
    >
      <LinkInternal
        href={`event/${Name}?id=${id}`}
        title={Name}
        className='w-auto min-w-auto'
      ><h3 className='font-bold text-4xl max-sm:hyphens-auto'>{Name}</h3></LinkInternal>
      {Date && Price ? (
        <div
          className='bg-ariBlackDarker rounded shadow py-4'
        >
          {Date ? (<p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Date) }} />) : ''}
          {Price ? (
            <>
              <hr className='border-ariBlackDark !mb-1 !mt-2' />
              <p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Price) }} />
            </>
          ) : ''}
        </div>
      ) : (
        <>
          {Date ? (
            <div
              className='bg-ariBlackDarker rounded shadow py-4'
            >
              <p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Date) }} />
            </div>
          ) : ''}
          {Price ? (
            <div
              className='bg-ariBlackDarker rounded shadow py-4'
            >
              <p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Price) }} />
            </div>
          ) : ''}
        </>
      )}
      {Day && Day.length ? (
        <div className='flex flex-col gap-4'>
          {Day.map((DayItem) => (
            (DayItem.StartTime && DayItem.Price) ? (
              <div
                className='bg-ariBlackDarker rounded shadow py-4'
              >
                {DayItem.StartTime ? (
                  <p className='text-2xl max-sm:hyphens-auto'>{formatDate(DayItem.StartTime) + (DayItem.EndTime ? (' - ' + formatDate(DayItem.EndTime)) : '')}</p>
                ) : ''}
                {DayItem.Price ? (
                  <>
                    <hr className='border-ariBlackDark !mb-1 !mt-2' />
                    <p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(DayItem.Price) }} />
                  </>
                ) : ''}
              </div>
            ) : (
              <>
                {DayItem.StartTime ? (
                  <div
                    className='bg-ariBlackDarker rounded shadow py-4'
                  >
                    <p className='text-2xl max-sm:hyphens-auto'>{formatDate(DayItem.StartTime) + (DayItem.EndTime ? (' - ' + formatDate(DayItem.EndTime)) : '')}</p>
                  </div>
                ) : ''}
                {DayItem.Price ? (
                  <div
                    className='bg-ariBlackDarker rounded shadow py-4'
                  >
                    <p className='text-2xl max-sm:hyphens-auto' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(DayItem.Price) }} />
                  </div>
                ) : ''}
              </>
            )
          ))}
        </div>
      ) : ''}
      <ButtonInternal
        href={`event/${Name}?id=${id}`}
        title={Name}
        className='w-full min-w-full text-xl font-bold'
      >
        View Event
      </ButtonInternal>
    </article>
  );
};

export default ItemEvent;