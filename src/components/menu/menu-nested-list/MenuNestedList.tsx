import React, { FunctionComponent, ReactNode, useState } from 'react';

import clsx from 'clsx';

export interface MenuNestedListProps {
  label: ReactNode;
  children: ReactNode;
  className?: string;
}

const MenuNestedList: FunctionComponent<MenuNestedListProps> = ({ label, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li>
      <a
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={toggle}
        className={clsx(isOpen && 'is-active', className)}
      >
        {label}
      </a>
      <ul style={{ display: isOpen ? 'block' : 'none' }} className="menu-list">
        {children}
      </ul>
    </li>
  );
};

export default MenuNestedList;
