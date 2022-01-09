import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IMenuListProps {
  children: ReactNode;
  className?: string;
}

const MenuList: FunctionComponent<IMenuListProps> = ({ children, className }) => (
  <ul className={clsx('menu-list', className)}>{children}</ul>
);

export default MenuList;
