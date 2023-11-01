import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface HeroFootProps {
  children: ReactNode;
  className?: string;
}

const HeroFoot: FunctionComponent<HeroFootProps> = ({ children, className }) => (
  <div className={clsx('hero-foot', className)}>{children}</div>
);

export default HeroFoot;
