import React, { FunctionComponent, LiHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface BreadcrumbElementProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

const BreadcrumbElement: FunctionComponent<BreadcrumbElementProps> = ({
  children,
  isActive,
  className,
  ...others
}) => (
  <li className={clsx(isActive && 'is-active', className)} {...others}>
    {children}
  </li>
);

export default BreadcrumbElement;
