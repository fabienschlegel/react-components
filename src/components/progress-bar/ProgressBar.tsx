import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

export interface ProgressBarProps {
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
}) => <progress className={clsx('progress', color, size, className)} value={value} max={max} />;

export default ProgressBar;
