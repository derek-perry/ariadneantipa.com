import { FC } from 'react';
import Link from 'next/link';

interface ILinkExternalProps {
  href: string;
  title: string;
  children?: JSX.Element | string;
  className?: string;
};

const LinkExternal: FC<ILinkExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target='_blank' rel='noopener noreferrer' className={'underline text-ariGold active:text-ariWhiteActive focus:text-ariWhiteFocus hover:text-ariWhiteHover hover:no-underline transition-all motion-reduce:transition-none motion-reduce:hover:transform-none ' + className}>
      {children}
    </Link>
  );
};

export default LinkExternal;