import clsx from 'clsx';

import React, { FunctionComponent, HTMLAttributes, ReactNode, useContext } from 'react';

import { NavbarContextProps, NavbarContext } from '../Navbar';

export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const NavbarBrand: FunctionComponent<NavbarBrandProps> = ({ children, className, ...others }) => {
  const { dataTarget, isOpen, toggleMenu } = useContext<NavbarContextProps>(NavbarContext);
  return (
    <div className={clsx('navbar-brand', className)} {...others}>
      {children}
      <span
        role="button"
        tabIndex={0}
        className={clsx('navbar-burger', isOpen && 'is-active')}
        aria-label="menu"
        aria-expanded="false"
        data-target={dataTarget}
        onClick={toggleMenu}
        onKeyDown={toggleMenu}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </span>
    </div>
  );
};

export default NavbarBrand;
