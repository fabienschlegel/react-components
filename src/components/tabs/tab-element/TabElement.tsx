import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';

export interface ITabElementProps {
  children: string | ReactNode;
  to: string;
  isActive?: boolean;
  className?: string;
}

const TabElement: FunctionComponent<ITabElementProps> = ({ children, to, isActive, className }) => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <li key={to} className={clsx(pathname === to || isActive ? 'is-active' : undefined, className)}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default TabElement;
