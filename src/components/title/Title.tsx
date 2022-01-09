import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Heading from '../heading/Heading';

import { HeadingLevel, HeaderSize } from '../../types';

export interface ITitleProps {
  children: ReactNode;
  size: HeaderSize;
  headingLevel?: HeadingLevel;
  useParagraph?: boolean;
  isSubtitle?: boolean;
  isSpaced?: boolean;
  className?: string;
}

const Title: FunctionComponent<ITitleProps> = ({
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
    isSpaced && 'is-spaced',
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
