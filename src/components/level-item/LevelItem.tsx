import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface LevelItemProps {
  children: ReactNode;
  id?: string;
  isCentered?: boolean;
  className?: string;
}

const LevelItem: React.FC<LevelItemProps> = ({ children, isCentered, className }) => (
  <div className={clsx('level-item', isCentered && 'has-text-centered', className)}>{children}</div>
);

export default LevelItem;
