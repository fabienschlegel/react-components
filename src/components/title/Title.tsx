import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import Heading from '../heading/Heading';

import { HeadingLevel, HeaderSize } from '../../types';

export interface TitleProps extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  children: ReactNode;
  size: HeaderSize;
  headingLevel?: HeadingLevel;
  useParagraph?: boolean;
  isSubtitle?: boolean;
  isSpaced?: boolean;
  className?: string;
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  size,
  headingLevel,
  useParagraph,
  isSubtitle,
  isSpaced,
  className,
  ...others
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
        <p className={classNameValues} {...others}>
          {children}
        </p>
      ) : (
        <Heading headingLevel={headingLevel} className={classNameValues} {...others}>
          {children}
        </Heading>
      )}
    </>
  );
};

export default Title;
