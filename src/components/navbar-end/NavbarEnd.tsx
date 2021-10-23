import React, { ReactNode } from 'react';

interface NavbarEndProps {
  children: ReactNode;
}

const NavbarEnd: React.FC<NavbarEndProps> = ({ children }) => (
  <div className="navbar-end">{children}</div>
);

export default NavbarEnd;
