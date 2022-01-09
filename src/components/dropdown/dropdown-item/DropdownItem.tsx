import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

export interface IDropdownItemProps {
  children: ReactNode;
  to?: string;
  isActive?: boolean;
  className?: string;
}

const DropdownItem: FunctionComponent<IDropdownItemProps> = ({
  children,
  to,
  isActive,
  className,
}) =>
  to ? (
    <Link to={to} className={clsx('dropdown-item', isActive && 'is-active')}>
      {children}
    </Link>
  ) : (
    <div className={clsx('dropdown-item', className)}>{children}</div>
  );

export default DropdownItem;
