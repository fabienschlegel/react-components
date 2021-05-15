import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { ColumnSize, IsNarrow } from './types';

export interface ColumnProps {
  children: ReactNode;
  columnSize?: ColumnSize;
  mobileColumnSize?: ColumnSize;
  tabletColumnSize?: ColumnSize;
  desktopColumnSize?: ColumnSize;
  widescreenColumnSize?: ColumnSize;
  fullhdColumnSize?: ColumnSize;
  offset?: number;
  isNarrow?: IsNarrow;
  className?: string;
}

const Column: React.FC<ColumnProps> = ({
  children,
  columnSize,
  mobileColumnSize,
  tabletColumnSize,
  desktopColumnSize,
  widescreenColumnSize,
  fullhdColumnSize,
  offset,
  isNarrow,
  className,
}) => (
  <div
    className={clsx(
      'column',
      columnSize,
      offset ? `is-offset-${offset}` : undefined,
      mobileColumnSize ? `${mobileColumnSize}-mobile` : undefined,
      tabletColumnSize ? `${tabletColumnSize}-tablet` : undefined,
      desktopColumnSize ? `${desktopColumnSize}-desktop` : undefined,
      widescreenColumnSize ? `${widescreenColumnSize}-widescreen` : undefined,
      fullhdColumnSize ? `${fullhdColumnSize}-fullhd` : undefined,
      isNarrow,
      className
    )}
  >
    {children}
  </div>
);

export default Column;
