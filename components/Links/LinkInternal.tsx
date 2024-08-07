import { FC } from 'react';
import Link from 'next/link';

interface ILinkInternalProps {
  href: string;
  title: string;
  children?: JSX.Element | string;
  className?: string;
};

const LinkInternal: FC<ILinkInternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <Link href={linkBase + '/' + href} title={title} className={'underline text-ariGold active:text-ariWhiteActive focus:text-ariWhiteFocus hover:text-ariWhiteHover hover:no-underline transition-all motion-reduce:transition-none motion-reduce:hover:transform-none ' + className}>
      {children}
    </Link>
  );
};

export default LinkInternal;