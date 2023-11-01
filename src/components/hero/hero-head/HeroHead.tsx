import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface HeroHeadProps {
  children: ReactNode;
  className?: string;
}

const HeroHead: FunctionComponent<HeroHeadProps> = ({ children, className }) => (
  <div className={clsx('hero-head', className)}>{children}</div>
);

export default HeroHead;
