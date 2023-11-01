import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  isDisabled?: boolean;
  labelClassName?: string;
  className?: string;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  children,
  isDisabled,
  labelClassName,
  className,
  ...others
}) => (
  <label className={clsx('checkbox', labelClassName)}>
    <input type="checkbox" {...others} className={clsx('mr-2', className)} disabled={isDisabled} />
    {children}
  </label>
);

export default Checkbox;
