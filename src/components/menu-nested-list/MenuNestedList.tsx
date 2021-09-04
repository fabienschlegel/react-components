import React, { ReactNode, useState } from 'react';

import clsx from 'clsx';

interface MenuNestedListProps {
  label: ReactNode;
  children: ReactNode;
}

const MenuNestedList: React.FC<MenuNestedListProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyPress={toggle}
        className={clsx(isOpen && 'is-active')}
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
