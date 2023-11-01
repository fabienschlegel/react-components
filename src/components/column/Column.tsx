import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { getResponsiveColumn } from '../../utils/utils';

import { ColumnSize, IsNarrow } from '../../types';

export interface ResponsiveColumnSize {
  mobile?: ColumnSize;
  tablet?: ColumnSize;
  desktop?: ColumnSize;
  widescreen?: ColumnSize;
  fullhd?: ColumnSize;
}

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columnSize?: ColumnSize;
  responsiveColumnSize?: ResponsiveColumnSize;
  offset?: number;
  isNarrow?: IsNarrow;
  className?: string;
}

const Column: FunctionComponent<ColumnProps> = ({
  children,
  columnSize,
  responsiveColumnSize,
  offset,
  isNarrow,
  className,
  ...others
}) => (
  <div
    className={clsx(
      'column',
      columnSize,
      offset && `is-offset-${offset}`,
      responsiveColumnSize && getResponsiveColumn(responsiveColumnSize),
      isNarrow,
      className
    )}
    {...others}
  >
    {children}
  </div>
);

export default Column;
