import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Heading from 'components/heading/Heading';

import HeadingLevel from 'components/heading/types';
import Size from './types';

export interface TitleProps {
  children: ReactNode;
  size: Size;
  headingLevel?: HeadingLevel;
  useParagraph?: boolean;
  isSubtitle?: boolean;
  isSpaced?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size,
  headingLevel,
  useParagraph,
  isSubtitle,
  isSpaced,
  className,
}) => {
  const classNameValues = clsx(
    isSubtitle ? 'subtitle' : 'title',
    isSpaced ? 'is-spaced' : undefined,
    size,
    className
  );
  return (
    <>
      {useParagraph ? (
        <p className={classNameValues}>{children}</p>
      ) : (
        <Heading headingLevel={headingLevel} className={classNameValues}>
          {children}
        </Heading>
      )}
    </>
  );
};

export default Title;
