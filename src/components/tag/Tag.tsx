import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { AnotherColors, Colors, LightColors, Sizes } from '../../types';

export interface ITagProps {
  children: ReactNode;
  color?: Colors | Omit<AnotherColors, 'is-text' | 'is-ghost'> | LightColors;
  size?: Omit<Sizes, 'is-small'>;
  isRounded?: boolean;
  isDelete?: boolean;
  className?: string;
}

const Tag: FunctionComponent<ITagProps> = ({
  children,
  color,
  size,
  isRounded,
  isDelete,
  className,
}) => (
  <span
    className={clsx(
      'tag',
      color,
      size,
      isRounded && 'is-rounded',
      isDelete && 'is-delete',
      className
    )}
  >
    {children}
  </span>
);

export default Tag;
