import React, { ReactNode } from 'react';

interface MenuLabelProps {
  children: ReactNode;
}

const MenuLabel: React.FC<MenuLabelProps> = ({ children }) => (
  <p className="menu-label">{children}</p>
);

export default MenuLabel;
