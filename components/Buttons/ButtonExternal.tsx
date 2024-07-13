import { FC } from 'react';
import Link from 'next/link';

interface IButtonExternalProps {
  href: string;
  title: string;
  children?: JSX.Element | string;
  className?: string;
};

const ButtonExternal: FC<IButtonExternalProps> = ({
  href,
  title,
  children,
  className
}): JSX.Element => {
  return (
    <Link href={href} title={title} target='_blank' rel='noopener noreferrer' className={'w-max m-auto rounded text-ariBlack active:text-ariBlack focus:text-ariBlack hover:text-ariBlack bg-ariWhite active:bg-[#9b9990] focus:bg-[#bcb9ad] hover:bg-[#bcb9ad] py-4 px-6 text-2xl transition-all motion-reduce:transition-none motion-reduce:hover:transform-none no-underline ' + className}>
      {children}
    </Link>
  );
};

export default ButtonExternal;