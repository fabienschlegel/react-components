import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface HeroBodyProps {
  children: ReactNode;
  className?: string;
}

const HeroBody: FunctionComponent<HeroBodyProps> = ({ children, className }) => (
  <div className={clsx('hero-body', className)}>{children}</div>
);

export default HeroBody;
