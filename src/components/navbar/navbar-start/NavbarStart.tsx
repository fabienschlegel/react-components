import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface NavbarStartProps {
  children: ReactNode;
  className?: string;
}

const NavbarStart: FunctionComponent<NavbarStartProps> = ({ children, className }) => (
  <div className={clsx('navbar-start', className)}>{children}</div>
);

export default NavbarStart;
