import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

export interface INavbarItemProps {
  children: ReactNode;
  to?: string;
  asDiv?: boolean;
  className?: string;
}

const NavbarItem: FunctionComponent<INavbarItemProps> = ({ children, to, asDiv, className }) => (
  <>
    {asDiv ? (
      <div className={clsx('navbar-item', className)}>{children}</div>
    ) : (
      to && (
        <Link to={to} className={clsx('navbar-item', className)}>
          {children}
        </Link>
      )
    )}
  </>
);

export default NavbarItem;
