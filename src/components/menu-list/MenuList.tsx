import React, { ReactNode } from 'react';

interface MenuListProps {
  children: ReactNode;
}

const MenuList: React.FC<MenuListProps> = ({ children }) => (
  <ul className="menu-list">{children}</ul>
);

export default MenuList;
