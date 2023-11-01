import { FunctionComponent, HTMLAttributes, ReactNode, useCallback, useState } from 'react';

import clsx from 'clsx';

export interface NavbarDropdownProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  label: ReactNode;
  isHoverable?: boolean;
  isRight?: boolean;
  isArrowLess?: boolean;
  isBoxed?: boolean;
  hasDropdownUp?: boolean;
  className?: string;
}

const NavbarDropdown: FunctionComponent<NavbarDropdownProps> = ({
  children,
  label,
  isHoverable,
  isRight,
  isArrowLess,
  isBoxed,
  hasDropdownUp,
  className,
  ...others
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
      {...others}
    >
      <span className="navbar-link" role="button" tabIndex={0} onClick={toggleDropdown}>
        {label}
      </span>
      <div className={clsx('navbar-dropdown', isOpen && 'is-active')}>{children}</div>
    </div>
  );
};

export default NavbarDropdown;
