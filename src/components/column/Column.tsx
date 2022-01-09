import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { getResponsiveColumn } from '../../utils/utils';

import { ColumnSize, IsNarrow } from '../../types';

export interface IColumnSize {
  mobile?: ColumnSize;
  tablet?: ColumnSize;
  desktop?: ColumnSize;
  widescreen?: ColumnSize;
  fullhd?: ColumnSize;
}

interface IColumnProps {
  children: ReactNode;
  columnSize?: ColumnSize;
  responsiveColumnSize?: IColumnSize;
  offset?: number;
  isNarrow?: IsNarrow;
  className?: string;
}

export type ColumnType = IColumnProps & React.HTMLAttributes<HTMLDivElement>;

const Column: FunctionComponent<ColumnType> = ({
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
