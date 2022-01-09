import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

import { Sizes } from '../../types';

interface LabelProps {
  size?: Sizes;
}

export type LabelType = LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: FunctionComponent<LabelType> = ({ children, size, className, htmlFor, ...others }) => (
  <label className={clsx('label', size, className)} htmlFor={htmlFor} {...others}>
    {children}
  </label>
);

export default Label;
