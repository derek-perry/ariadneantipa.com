import { FC } from 'react';
import ButtonInternal from '../Buttons/ButtonInternal';
import LinkInternal from '../Links/LinkInternal';

interface IItemProjectProps {
  id: string;
  Name: string;
  Content: string;
  SEODescription: string;
  className?: string;
};

const ItemProject: FC<IItemProjectProps> = ({
  id,
  Name,
  Content,
  SEODescription,
  className
}): JSX.Element => {
  function stringWithLineBreaks(inputString: string) {
    return inputString?.toString().replace(/(?:\r\n|\r|\n)/g, '<br />');
  };

  return (
    <article
      key={Name}
      id={Name}
      className={'w-full max-w-[600px] flex flex-col gap-4 p-6 bg-ariBlackDark shadow ' + className}
    >
    <LinkInternal
      href={`project/${Name}?id=${id}`}
      title={Name}
      className='w-auto min-w-auto'
    ><h3 className='font-bold text-4xl'>{Name}</h3></LinkInternal>
      {SEODescription ? (<p className='text-ariWhiteHover text-justify text-xl' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(SEODescription.split(' ').slice(0, 30).join(' ') + '...') }} />) : (Content ? (<p className='text-ariWhiteHover text-justify text-xl' dangerouslySetInnerHTML={{ __html: stringWithLineBreaks(Content.split(' ').slice(0, 30).join(' ') + '...') }} />) : (''))}
      <ButtonInternal
        href={`project/${Name}?id=${id}`}
        title={Name}
        className='w-full min-w-full text-xl font-bold'
      >
        Read More...
      </ButtonInternal>
    </article>
  );
};

export default ItemProject;