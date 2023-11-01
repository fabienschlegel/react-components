import {
  ReactNode,
  useState,
  useCallback,
  FunctionComponent,
  createContext,
  HTMLAttributes,
} from 'react';

import clsx from 'clsx';

import NavbarMenu, { NavbarMenuProps } from './navbar-menu/NavbarMenu';
import NavbarBrand, { NavbarBrandProps } from './navbar-brand/NavbarBrand';
import NavbarDivider, { NavbarDividerProps } from './navbar-divider/NavbarDivider';
import NavbarDropdown, { NavbarDropdownProps } from './navbar-dropdown/NavbarDropdown';
import NavbarEnd, { NavbarEndProps } from './navbar-end/NavbarEnd';
import NavbarItem from './navbar-item/NavbarItem';
import NavbarStart, { NavbarStartProps } from './navbar-start/NavbarStart';

import { Colors, AnotherColors } from '../../types';

interface NavbarComposition {
  Menu: FunctionComponent<NavbarMenuProps>;
  Brand: FunctionComponent<NavbarBrandProps>;
  Divider: FunctionComponent<NavbarDividerProps>;
  Dropdown: FunctionComponent<NavbarDropdownProps>;
  End: FunctionComponent<NavbarEndProps>;
  Item: typeof NavbarItem;
  Start: FunctionComponent<NavbarStartProps>;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  label: string;
  dataTarget: string;
  color?: Colors | AnotherColors;
  isTransparent?: boolean;
  isFixed?: 'top' | 'bottom';
  isSpaced?: boolean;
  hasShadow?: boolean;
  className?: string;
}

type NavbarType = FunctionComponent<NavbarProps> & NavbarComposition;

export interface NavbarContextProps {
  dataTarget: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

export const NavbarContext = createContext<NavbarContextProps>({
  dataTarget: '',
  isOpen: false,
  toggleMenu: () => null,
});

const Navbar: NavbarType = ({
  children,
  label,
  dataTarget,
  color,
  isTransparent,
  isFixed,
  isSpaced,
  hasShadow,
  className,
  ...others
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <NavbarContext.Provider value={{ dataTarget, isOpen, toggleMenu }}>
      <nav
        className={clsx(
          'navbar',
          color,
          isTransparent && 'is-transparent',
          isFixed && `is-fixed-${isFixed}`,
          isSpaced && 'is-spaced',
          hasShadow && 'has-shadow',
          className
        )}
        role="navigation"
        aria-label={label}
        {...others}
      >
        {children}
      </nav>
    </NavbarContext.Provider>
  );
};

Navbar.Menu = NavbarMenu;
Navbar.Brand = NavbarBrand;
Navbar.Divider = NavbarDivider;
Navbar.Dropdown = NavbarDropdown;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Start = NavbarStart;

export default Navbar;
