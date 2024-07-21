import { FC } from 'react';
import { eventDayProps } from '../../lib/api';
import ButtonInternal from '../Buttons/ButtonInternal';
import LinkInternal from '../Links/LinkInternal';

interface IItemEventProps {
  id: string;
  Name: string;
  Day: eventDayProps[] | null;
  Description: string;
  className?: string;
};

const ItemEvent: FC<IItemEventProps> = ({
  id,
  Name,
  Day,
  Description,
  className
}): JSX.Element => {
  function stringWithLineBreaks(inputString: string) {
    return inputString?.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
  };

  function fixDescription(inputString: string) {
    if (inputString?.split(' ').length >= 30) {
      return stringWithLineBreaks(inputString?.split(' ').slice(0, 30).join(' ') + '...');
    } else {
      return stringWithLineBreaks(inputString);
    };
  };

  function formatDate(dateTime: string, timezoneOffset?: string) {
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

      if (timezoneOffset) {
        const timezoneOffsetInt = parseInt(timezoneOffset, 10);
        let adjustedHour = (hourInt + timezoneOffsetInt) % 24;
        let dayFixed = parseInt(day, 10);
        if (adjustedHour < 0) {
          adjustedHour += 24;
          dayFixed -= 1;
        };
        const adjustedHour12 = adjustedHour % 12 || 12;
        const adjustedAMPM = adjustedHour >= 12 ? 'pm' : 'am';

        return `${monthName} ${dayFixed}, ${year} ${adjustedHour12}:${minute}${adjustedAMPM}`;
      } else {
        return `${monthName} ${day}, ${year} ${hour12}:${minute}${ampm}`;
      };
    } else {
      return '';
    };
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
      ><h3 className='font-bold text-4xl'>{Name}</h3></LinkInternal>
      {Day && Day.length ? (
        <div className='flex flex-col gap-4'>
          {Day.map((DayItem) => (
            (DayItem.StartTime && DayItem.Price) ? (
              <div
                className='bg-ariBlackDarker rounded shadow py-2'
              >
                {DayItem.StartTime ? (
                  <div
                    className='flex flex-row flex-wrap gap-y-0 gap-x-2 px-2 justify-center align-middle items-center'
                  >
                    <p className='text-2xl'>{formatDate(DayItem.StartTime, DayItem.Timezone.data?.attributes.Offset)}</p>
                    {(DayItem.EndTime ? (
                      <div className='flex flex-row flex-wrap gap-y-0 gap-x-2 justify-center align-middle items-center'>
                        <p className='text-2xl'> - </p>
                        <p className='text-2xl'>{formatDate(DayItem.EndTime, DayItem.Timezone.data?.attributes.Offset)}</p>
                        {(DayItem.Timezone.data ? (
                          <p className='text-2xl'>{DayItem.Timezone.data.attributes.Abbreviation}</p>
                        ) : '')}
                      </div>
                    ) : '')}
                  </div>
                ) : ''}
                {DayItem.Price ? (
                  <>
                    <hr className='border-ariGrey !mb-1 !mt-2' />
                    <p className='text-2xl px-2' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(DayItem.Price) }} />
                  </>
                ) : ''}
              </div>
            ) : (
              <>
                {DayItem.StartTime ? (
                  <div
                    className='bg-ariBlackDarker rounded shadow flex flex-row flex-wrap gap-y-0 gap-x-2 p-2 justify-center align-middle items-center'
                  >
                    <p className='text-2xl'>{formatDate(DayItem.StartTime, DayItem.Timezone.data?.attributes.Offset)}</p>
                    {(DayItem.EndTime ? (
                      <div className='flex flex-row flex-wrap gap-y-0 gap-x-2 justify-center align-middle items-center'>
                        <p className='text-2xl'> - </p>
                        <p className='text-2xl'>{formatDate(DayItem.EndTime, DayItem.Timezone.data?.attributes.Offset)}</p>
                        {(DayItem.Timezone.data ? (
                          <p className='text-2xl'>{DayItem.Timezone.data.attributes.Abbreviation}</p>
                        ) : '')}
                      </div>
                    ) : '')}
                  </div>
                ) : ''}
              </>
            )
          ))}
        </div>
      ) : ''}
      {Description ? (
        <p className='text-ariWhiteHover text-justify text-xl' dangerouslySetInnerHTML={{ __html: fixDescription(Description) }} />
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