import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Colors, NumericSizeModifier } from '../../types';

type Context = 'is-ancestor' | 'is-parent' | 'is-child';

export interface TileProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  context: Context;
  isVertical?: boolean;
  isBox?: boolean;
  color?: Colors;
  size?: NumericSizeModifier;
  className?: string;
}

const Tile: FunctionComponent<TileProps> = ({
  children,
  context,
  isVertical,
  isBox,
  color,
  size,
  className,
  ...others
}) => (
  <div
    className={clsx(
      'tile',
      context,
      isVertical && 'is-vertical',
      isBox && 'box',
      color && `notification ${color}`,
      size,
      className
    )}
    {...others}
  >
    {children}
  </div>
);

export default Tile;
