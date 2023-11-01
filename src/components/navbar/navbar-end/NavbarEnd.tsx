import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface NavbarEndProps {
  children: ReactNode;
  className?: string;
}

const NavbarEnd: FunctionComponent<NavbarEndProps> = ({ children, className }) => (
  <div className={clsx('navbar-end', className)}>{children}</div>
);

export default NavbarEnd;
