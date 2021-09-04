import React from 'react';
import clsx from 'clsx';

import { Sizes } from '../../types';

interface LabelProps {
  size?: Sizes;
}

export type LabelType = LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelType> = ({ children, size, className, htmlFor, ...others }) => (
  <label className={clsx('label', size, className)} htmlFor={htmlFor} {...others}>
    {children}
  </label>
);

export default Label;
