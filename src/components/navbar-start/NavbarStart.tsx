import React, { ReactNode } from 'react';

interface NavbarStartProps {
  children: ReactNode;
}

const NavbarStart: React.FC<NavbarStartProps> = ({ children }) => (
  <div className="navbar-start">{children}</div>
);

export default NavbarStart;
