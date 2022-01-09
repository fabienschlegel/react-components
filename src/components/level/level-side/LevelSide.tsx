import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface LevelSideProps {
  children: ReactNode;
  side: 'left' | 'right';
  className?: string;
}

const LevelSide: FunctionComponent<LevelSideProps> = ({ children, side, className }) => (
  <div className={clsx(`level-${side}`, className)}>{children}</div>
);

export default LevelSide;
