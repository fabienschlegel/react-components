import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { getResponsiveColumn } from '../../utils/utils';

import { ColumnsGap } from '../../types';

export interface IColumnsGap {
  mobile?: ColumnsGap;
  tablet?: ColumnsGap;
  desktop?: ColumnsGap;
  widescreen?: ColumnsGap;
  fullhd?: ColumnsGap;
}

interface IOptions {
  'is-mobile'?: boolean;
  'is-desktop'?: boolean;
  'is-gapless'?: boolean;
  'is-multiline'?: boolean;
  'is-vcentered'?: boolean;
  'is-centered'?: boolean;
}

interface ColumnsProps {
  children: ReactNode;
  options?: IOptions;
  columnsGap?: ColumnsGap;
  responsiveColumnsGap?: IColumnsGap;
  className?: string;
}

export type ColumnsType = ColumnsProps & React.HTMLAttributes<HTMLDivElement>;

const Columns: React.FC<ColumnsType> = ({
  children,
  options,
  columnsGap,
  responsiveColumnsGap,
  className,
}) => (
  <div
    className={clsx(
      'columns',
      options,
      columnsGap,
      responsiveColumnsGap && getResponsiveColumn(responsiveColumnsGap),
      (columnsGap || responsiveColumnsGap) && 'is-variable',
      className
    )}
  >
    {children}
  </div>
);

export default Columns;
