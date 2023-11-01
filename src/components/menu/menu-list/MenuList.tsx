import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface MenuListProps {
  children: ReactNode;
  className?: string;
}

const MenuList: FunctionComponent<MenuListProps> = ({ children, className }) => (
  <ul className={clsx('menu-list', className)}>{children}</ul>
);

export default MenuList;
