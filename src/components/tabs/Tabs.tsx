import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import TabElement from './tab-element/TabElement';

import { Alignment, Sizes } from '../../types';

interface TabsComposition {
  Element: typeof TabElement;
}

export interface TabsProps {
  children: ReactNode;
  alignment?: Alignment;
  size?: Omit<Sizes, 'is-normal'>;
  isBoxed?: boolean;
  isToggle?: boolean;
  isToggleRounded?: boolean;
  isFullWidth?: boolean;
  className?: string;
}

type TabsType = FunctionComponent<TabsProps> & TabsComposition;

const Tabs: TabsType = ({
  children,
  alignment,
  size,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullWidth,
  className,
}) => (
  <div
    className={clsx(
      'tabs',
      alignment,
      size,
      isBoxed && 'is-boxed',
      isToggle && 'is-toggle',
      isToggle && isToggleRounded && 'is-toggle-rounded',
      isFullWidth && 'is-fullwidth',
      className
    )}
  >
    <ul>{children}</ul>
  </div>
);

Tabs.Element = TabElement;

export default Tabs;
