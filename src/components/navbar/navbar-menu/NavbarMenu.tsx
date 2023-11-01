import { FunctionComponent, HTMLAttributes, ReactNode, useContext } from 'react';

import clsx from 'clsx';

import { NavbarContext, NavbarContextProps } from '../Navbar';

export interface NavbarMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const NavbarMenu: FunctionComponent<NavbarMenuProps> = ({ children, className, ...others }) => {
  const { dataTarget, isOpen } = useContext<NavbarContextProps>(NavbarContext);
  return (
    <div
      id={dataTarget}
      className={clsx('navbar-menu', isOpen && 'is-active', className)}
      {...others}
    >
      {children}
    </div>
  );
};

export default NavbarMenu;
