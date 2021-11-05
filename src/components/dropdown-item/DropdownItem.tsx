import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

export interface IDropdownItem {
  id: string;
  content: string | ReactNode;
  hasDivider?: boolean;
}

export interface IDropdownLinkItem extends IDropdownItem {
  to: string;
  isActive?: boolean;
}

interface DropdownItemProps {
  item: IDropdownItem | IDropdownLinkItem;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ item }) => {
  const { content } = item;
  const { to, isActive } = item as IDropdownLinkItem;
  return item instanceof Object && 'to' in item ? (
    <Link to={to} className={clsx('dropdown-item', isActive && 'is-active')}>
      {content}
    </Link>
  ) : (
    <div className="dropdown-item">{content}</div>
  );
};

export default DropdownItem;
