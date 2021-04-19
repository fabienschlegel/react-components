import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';

import { Alignment, Size } from './types';

interface Tab {
  name: string | ReactNode;
  to: string;
  isActive?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  alignment?: Alignment;
  size?: Size;
  isBoxed?: boolean;
  isToggle?: boolean;
  isToggleRounded?: boolean;
  isFullWidth?: boolean;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  alignment,
  size,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
  className,
}) => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div
      className={clsx(
        'tabs',
        alignment,
        size,
        isBoxed ? 'is-boxed' : undefined,
        isToggle ? 'is-toggle' : undefined,
        isToggle && isToggleRounded ? 'is-toggle-rounded' : undefined,
        isFullWidth ? 'is-fullwidth' : undefined,
        className
      )}
    >
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.to}
            className={clsx(pathname === tab.to ? 'is-active' : undefined)}
          >
            <Link to={tab.to}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
