import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

export interface ISectionProps {
  children: ReactNode;
  size?: Omit<Sizes, 'is-small' | 'is-normal'>;
  className?: string;
}

const Section: FunctionComponent<ISectionProps> = ({ children, size, className }) => (
  <section className={clsx('section', size, className)}>{children}</section>
);

export default Section;
