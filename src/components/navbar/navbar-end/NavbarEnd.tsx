import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface INavbarEndProps {
  children: ReactNode;
  className?: string;
}

const NavbarEnd: FunctionComponent<INavbarEndProps> = ({ children, className }) => (
  <div className={clsx('navbar-end', className)}>{children}</div>
);

export default NavbarEnd;
