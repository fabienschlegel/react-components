import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IHeroFootProps {
  children: ReactNode;
  className?: string;
}

const HeroFoot: FunctionComponent<IHeroFootProps> = ({ children, className }) => (
  <div className={clsx('hero-foot', className)}>{children}</div>
);

export default HeroFoot;
