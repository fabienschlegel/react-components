import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Color, Size } from './types';

export interface TagProps {
  children?: ReactNode;
  color?: Color;
  size?: Size;
  isRounded?: boolean;
  isDelete?: boolean;
  className?: string;
}

const Tag: React.FC<TagProps> = ({
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
      isRounded ? 'is-rounded' : undefined,
      isDelete ? 'is-delete' : undefined,
      className
    )}
  >
    {isDelete ? null : children}
  </span>
);

export default Tag;
