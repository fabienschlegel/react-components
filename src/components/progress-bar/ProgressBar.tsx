import React from 'react';

import clsx from 'clsx';

import { Color, Size } from './types';

export interface ProgressBarProps {
  value?: number;
  max?: number;
  color?: Color;
  size?: Size;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color,
  size,
  className,
}) => (
  <progress
    className={clsx('progress', color, size, className)}
    value={value}
    max={max}
  />
);

export default ProgressBar;
