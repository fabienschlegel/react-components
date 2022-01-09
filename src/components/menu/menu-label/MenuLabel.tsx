import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IMenuLabelProps {
  children: ReactNode;
  className?: string;
}

const MenuLabel: FunctionComponent<IMenuLabelProps> = ({ children, className }) => (
  <p className={clsx('menu-label', className)}>{children}</p>
);

export default MenuLabel;
