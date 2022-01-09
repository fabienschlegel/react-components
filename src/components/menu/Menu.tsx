import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import MenuLabel, { IMenuLabelProps } from './menu-label/MenuLabel';
import MenuItem, { IMenuItemProps } from './menu-item/MenuItem';
import MenuList, { IMenuListProps } from './menu-list/MenuList';
import MenuNestedList, { IMenuNestedListProps } from './menu-nested-list/MenuNestedList';

interface MenuComposition {
  Label: FunctionComponent<IMenuLabelProps>;
  Item: FunctionComponent<IMenuItemProps>;
  List: FunctionComponent<IMenuListProps>;
  NestedList: FunctionComponent<IMenuNestedListProps>;
}

export interface IMenuProps {
  children: ReactNode;
  className?: string;
}

type MenuType = FunctionComponent<IMenuProps> & MenuComposition;

const Menu: MenuType = ({ children, className }) => (
  <aside className={clsx('menu', className)}>{children}</aside>
);

Menu.Label = MenuLabel;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.NestedList = MenuNestedList;

export default Menu;
