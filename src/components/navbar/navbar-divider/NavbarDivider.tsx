import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

export interface NavbarDividerProps {
  className?: string;
}
const NavbarDivider: FunctionComponent<NavbarDividerProps> = ({ className }) => (
  <hr className={clsx('navbar-divider', className)} />
);

export default NavbarDivider;
