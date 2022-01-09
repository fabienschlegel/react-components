import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IHeroHeadProps {
  children: ReactNode;
  className?: string;
}

const HeroHead: FunctionComponent<IHeroHeadProps> = ({ children, className }) => (
  <div className={clsx('hero-head', className)}>{children}</div>
);

export default HeroHead;
