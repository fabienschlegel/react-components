import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

export interface INavbarDividerProps {
  className?: string;
}
const NavbarDivider: FunctionComponent<INavbarDividerProps> = ({ className }) => (
  <hr className={clsx('navbar-divider', className)} />
);

export default NavbarDivider;
