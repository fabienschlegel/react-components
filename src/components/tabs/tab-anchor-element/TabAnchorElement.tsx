import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ITabAnchorElementProps {
  children: string | ReactNode;
  to: string;
  isActive?: boolean;
  className?: string;
}

const TabAnchorElement: FunctionComponent<ITabAnchorElementProps> = ({
  children,
  to,
  isActive,
  className,
}) => (
    <li key={to} className={clsx(isActive && 'is-active', className)}>
      <a href={to}>{children}</a>
    </li>
  );

export default TabAnchorElement;
