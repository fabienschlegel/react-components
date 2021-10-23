import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface BreadcrumbElementProps {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

const BreadcrumbElement: React.FC<BreadcrumbElementProps> = ({ children, isActive, className }) => (
  <li className={clsx(isActive && 'is-active', className)}>{children}</li>
);

export default BreadcrumbElement;
