import React, { ReactNode, useState, useCallback, FunctionComponent } from 'react';

import clsx from 'clsx';

import NavbarBrand from './navbar-brand/NavbarBrand';
import NavbarDivider, { INavbarDividerProps } from './navbar-divider/NavbarDivider';
import NavbarDropdown, { INavbarDropdownProps } from './navbar-dropdown/NavbarDropdown';
import NavbarEnd, { INavbarEndProps } from './navbar-end/NavbarEnd';
import NavbarItem, { INavbarItemProps } from './navbar-item/NavbarItem';
import NavbarStart, { INavbarStartProps } from './navbar-start/NavbarStart';

import { Colors, AnotherColors } from '../../types';

interface NavbarComposition {
  Divider: FunctionComponent<INavbarDividerProps>;
  Dropdown: FunctionComponent<INavbarDropdownProps>;
  End: FunctionComponent<INavbarEndProps>;
  Item: FunctionComponent<INavbarItemProps>;
  Start: FunctionComponent<INavbarStartProps>;
}

export interface INavbarProps {
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
  className?: string;
}

type NavbarType = FunctionComponent<INavbarProps> & NavbarComposition;

const Navbar: NavbarType = ({
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
  className,
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
        hasShadow && 'has-shadow',
        className
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

Navbar.Divider = NavbarDivider;
Navbar.Dropdown = NavbarDropdown;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Start = NavbarStart;

export default Navbar;
