import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { getResponsiveColumn } from '../../utils/utils';

import { ColumnsGap } from '../../types';

export interface ResponsiveColumnsGap {
  mobile?: ColumnsGap;
  tablet?: ColumnsGap;
  desktop?: ColumnsGap;
  widescreen?: ColumnsGap;
  fullhd?: ColumnsGap;
}

interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isMobile?: boolean;
  isDesktop?: boolean;
  isGapless?: boolean;
  isMultiline?: boolean;
  isVcentered?: boolean;
  isCentered?: boolean;
  columnsGap?: ColumnsGap;
  responsiveColumnsGap?: ResponsiveColumnsGap;
  className?: string;
}

const Columns: FunctionComponent<ColumnsProps> = ({
  children,
  isMobile,
  isDesktop,
  isGapless,
  isMultiline,
  isVcentered,
  isCentered,
  columnsGap,
  responsiveColumnsGap,
  className,
}) => (
  <div
    className={clsx(
      'columns',
      isMobile && 'is-mobile',
      isDesktop && 'is-desktop',
      isGapless && 'is-gapless',
      isMultiline && 'is-multiline',
      isVcentered && 'is-vcentered',
      isCentered && 'is-centered',
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
