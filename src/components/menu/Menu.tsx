import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import MenuLabel, { MenuLabelProps } from './menu-label/MenuLabel';
import MenuItem from './menu-item/MenuItem';
import MenuList, { MenuListProps } from './menu-list/MenuList';
import MenuNestedList, { MenuNestedListProps } from './menu-nested-list/MenuNestedList';

interface MenuComposition {
  Label: FunctionComponent<MenuLabelProps>;
  Item: typeof MenuItem;
  List: FunctionComponent<MenuListProps>;
  NestedList: FunctionComponent<MenuNestedListProps>;
}

export interface MenuProps {
  children: ReactNode;
  className?: string;
}

export type MenuType = FunctionComponent<MenuProps> & MenuComposition;

const Menu: MenuType = ({ children, className }) => (
  <aside className={clsx('menu', className)}>{children}</aside>
);

Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.NestedList = MenuNestedList;

export default Menu;
