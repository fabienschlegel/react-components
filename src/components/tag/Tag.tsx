import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { AnotherColors, Colors, LightColors, Sizes } from '../../types';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: Colors | AnotherColors | LightColors;
  size?: Omit<Sizes, 'is-small'>;
  isRounded?: boolean;
  isDelete?: boolean;
  className?: string;
}

const Tag: FunctionComponent<TagProps> = ({
  children,
  color,
  size,
  isRounded,
  isDelete,
  className,
  ...others
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
    {...others}
  >
    {children}
  </span>
);

export default Tag;
