import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface MenuLabelProps {
  children: ReactNode;
  className?: string;
}

const MenuLabel: FunctionComponent<MenuLabelProps> = ({ children, className }) => (
  <p className={clsx('menu-label', className)}>{children}</p>
);

export default MenuLabel;
