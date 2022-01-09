import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IHeroBodyProps {
  children: ReactNode;
  className?: string;
}

const HeroBody: FunctionComponent<IHeroBodyProps> = ({ children, className }) => (
  <div className={clsx('hero-body', className)}>{children}</div>
);

export default HeroBody;
