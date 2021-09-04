import React, { ReactNode } from 'react';

export interface MenuProps {
  children: ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => <aside className="menu">{children}</aside>;

export default Menu;
