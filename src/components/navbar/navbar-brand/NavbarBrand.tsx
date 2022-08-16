import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

interface NavbarBrandProps {
  children: ReactNode;
  brandUrl: string;
  dataTarget: string;
  isOpen: boolean;
  toggleMenu: () => void;
  renderAsAnchor?: boolean;
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({
  children,
  brandUrl,
  dataTarget,
  isOpen,
  toggleMenu,
  renderAsAnchor,
}) => {
  const navbarItem = renderAsAnchor ? (
    <a className="navbar-item" href={brandUrl}>
      {children}
    </a>
  ) : (
    <Link className="navbar-item" to={brandUrl}>
      {children}
    </Link>
  );

  return (
    <div className="navbar-brand">
      {navbarItem}
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
};

export default NavbarBrand;
