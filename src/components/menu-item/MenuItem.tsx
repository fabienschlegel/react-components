import React, { ReactNode } from 'react';

import { Link } from 'react-router-dom';

interface MenuItemProps {
  children: ReactNode;
  to: string;
}

const MenuList: React.FC<MenuItemProps> = ({ children, to }) => <Link to={to}>{children}</Link>;

export default MenuList;
