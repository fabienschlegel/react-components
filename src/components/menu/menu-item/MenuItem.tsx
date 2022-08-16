import React, { FunctionComponent, ReactNode } from 'react';

import { Link } from 'react-router-dom';

export interface IMenuItemProps {
  children: ReactNode;
  to: string;
  renderAsAnchor?: boolean;
  className?: string;
}

const MenuList: FunctionComponent<IMenuItemProps> = ({
  children,
  to,
  renderAsAnchor,
  className,
}) => renderAsAnchor ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
export default MenuList;
