import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';

import clsx from 'clsx';

export interface INavbarDropdownProps {
  children: ReactNode;
  label: ReactNode;
  isHoverable?: boolean;
  isRight?: boolean;
  isArrowLess?: boolean;
  isBoxed?: boolean;
  hasDropdownUp?: boolean;
  className?: string;
}

const NavbarDropdown: FunctionComponent<INavbarDropdownProps> = ({
  children,
  label,
  isHoverable,
  isRight,
  isArrowLess,
  isBoxed,
  hasDropdownUp,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    if (!isHoverable) setIsOpen(!isOpen);
  }, [isOpen, isHoverable]);

  return (
    <div
      className={clsx(
        'navbar-item has-dropdown',
        isHoverable && 'is-hoverable',
        isRight && 'is-right',
        isArrowLess && 'is-arrowless',
        isBoxed && 'is-boxed',
        hasDropdownUp && 'has-dropdown-up',
        isOpen && 'is-active',
        className
      )}
    >
      <span
        className="navbar-link"
        role="button"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyPress={toggleDropdown}
      >
        {label}
      </span>
      <div className={clsx('navbar-dropdown', isOpen && 'is-active')}>{children}</div>
    </div>
  );
};

export default NavbarDropdown;
