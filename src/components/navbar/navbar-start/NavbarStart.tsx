import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface INavbarStartProps {
  children: ReactNode;
  className?: string;
}

const NavbarStart: FunctionComponent<INavbarStartProps> = ({ children, className }) => (
  <div className={clsx('navbar-start', className)}>{children}</div>
);

export default NavbarStart;
