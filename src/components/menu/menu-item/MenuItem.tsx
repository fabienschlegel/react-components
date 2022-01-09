import React, { FunctionComponent, ReactNode } from 'react';

import { Link } from 'react-router-dom';

export interface IMenuItemProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const MenuList: FunctionComponent<IMenuItemProps> = ({ children, to, className }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
);

export default MenuList;
