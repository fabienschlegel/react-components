import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

export interface NavbarBrandProps {
  children: ReactNode;
  brandUrl: string;
  dataTarget: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({
  children,
  brandUrl,
  dataTarget,
  isOpen,
  toggleMenu,
}) => (
  <div className="navbar-brand">
    <Link className="navbar-item" to={brandUrl}>
      {children}
    </Link>

    <span
      role="button"
      tabIndex={0}
      className={clsx('navbar-burger', isOpen && 'is-active')}
      aria-label="menu"
      aria-expanded="false"
      data-target={dataTarget}
      onClick={toggleMenu}
      onKeyPress={toggleMenu}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
);

export default NavbarBrand;
