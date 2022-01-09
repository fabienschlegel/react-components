import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface LevelItemProps {
  children: ReactNode;
  isCentered?: boolean;
  className?: string;
}

const LevelItem: FunctionComponent<LevelItemProps> = ({ children, isCentered, className }) => (
  <div className={clsx('level-item', isCentered && 'has-text-centered', className)}>{children}</div>
);

export default LevelItem;
