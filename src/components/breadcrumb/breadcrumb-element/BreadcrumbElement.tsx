import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IBreadcrumbElementProps {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}

const BreadcrumbElement: FunctionComponent<IBreadcrumbElementProps> = ({
  children,
  isActive,
  className,
}) => <li className={clsx(isActive && 'is-active', className)}>{children}</li>;

export default BreadcrumbElement;
