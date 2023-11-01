import React, { FunctionComponent, ProgressHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

export interface ProgressBarProps extends ProgressHTMLAttributes<HTMLProgressElement> {
  value?: number;
  max?: number;
  color?: Colors;
  size?: Sizes;
  className?: string;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  value,
  max = 100,
  color,
  size,
  className,
  ...others
}) => (
  <progress
    className={clsx('progress', color, size, className)}
    value={value}
    max={max}
    {...others}
  />
);

export default ProgressBar;
