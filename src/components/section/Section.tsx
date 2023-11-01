import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

export interface SectionProps {
  children: ReactNode;
  size?: Omit<Sizes, 'is-small' | 'is-normal'>;
  className?: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, size, className }) => (
  <section className={clsx('section', size, className)}>{children}</section>
);

export default Section;
