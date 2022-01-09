import React, { FunctionComponent, ReactNode, useState } from 'react';

import clsx from 'clsx';

export interface IMenuNestedListProps {
  label: ReactNode;
  children: ReactNode;
  className?: string;
}

const MenuNestedList: FunctionComponent<IMenuNestedListProps> = ({
  label,
  children,
  className,
}) => {
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
