import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Colors, NumericSizeModifier } from '../../types';

type Context = 'is-ancestor' | 'is-parent' | 'is-child';

export interface ITileProps {
  children: ReactNode;
  context: Context;
  isVertical?: boolean;
  isBox?: boolean;
  color?: Colors;
  size?: NumericSizeModifier;
  className?: string;
}

const Tile: FunctionComponent<ITileProps> = ({
  children,
  context,
  isVertical,
  isBox,
  color,
  size,
  className,
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
  >
    {children}
  </div>
);

export default Tile;
