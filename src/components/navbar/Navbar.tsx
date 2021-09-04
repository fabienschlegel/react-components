import React, { ReactNode, useState, useCallback } from 'react';

import clsx from 'clsx';

import { Colors, AnotherColors } from '../../types';

import NavbarBrand from '../navbar-brand/NavbarBrand';

export interface NavbarProps {
  children: ReactNode;
  label: string;
  brandUrl: string;
  dataTarget: string;
  navbarBrand: ReactNode;
  colors?: Colors | Omit<AnotherColors, 'is-text' | 'is-ghost'>;
  isTransparent?: boolean;
  isFixed?: 'top' | 'bottom';
  isSpaced?: boolean;
  hasShadow?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  children,
  label,
  brandUrl,
  dataTarget,
  navbarBrand,
  colors,
  isTransparent,
  isFixed,
  isSpaced,
  hasShadow,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav
      className={clsx(
        'navbar',
        colors,
        isTransparent && 'is-transparent',
        isFixed && `is-fixed-${isFixed}`,
        isSpaced && 'is-spaced',
        hasShadow && 'has-shadow'
      )}
      role="navigation"
      aria-label={label}
    >
      <NavbarBrand
        brandUrl={brandUrl}
        dataTarget={dataTarget}
        toggleMenu={toggleMenu}
        isOpen={isOpen}
      >
        {navbarBrand}
      </NavbarBrand>
      <div id={dataTarget} className={clsx('navbar-menu', isOpen && 'is-active')}>
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
