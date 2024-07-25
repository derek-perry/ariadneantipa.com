import { FC } from 'react';

interface IVideoProps {
  title: string | null;
  url: string | null;
  classNameContainer?: string | null;
  classNameIFrame?: string | null;
}

const Video: FC<IVideoProps> = ({
  title,
  url,
  classNameContainer,
  classNameIFrame
}): JSX.Element => {
  return (
    <div className={'videoContainer' + classNameContainer}>
      <iframe
        src={url ? 'https://youtube.com/embed/' + url : ''}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title={title ? title : ''}
        className={'videoItem ' + classNameIFrame}
      />
    </div>
  );
};

export default Video;