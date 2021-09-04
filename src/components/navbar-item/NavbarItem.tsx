import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

export interface NavbarItemProps {
  children: ReactNode;
  to?: string;
  asDiv?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, to, asDiv }) => (
  <>
    {asDiv ? (
      <div className="navbar-item">{children}</div>
    ) : (
      to && (
        <Link to={to} className="navbar-item">
          {children}
        </Link>
      )
    )}
  </>
);

export default NavbarItem;
