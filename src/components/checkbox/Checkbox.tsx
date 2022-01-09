import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface ICheckboxProps {
  children: ReactNode;
  isDisabled?: boolean;
  labelClassName?: string;
  className?: string;
}

export type CheckboxType = ICheckboxProps & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FunctionComponent<CheckboxType> = ({
  children,
  isDisabled,
  labelClassName,
  className,
  ...others
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={clsx('checkbox', labelClassName)}>
    <input type="checkbox" {...others} className={clsx('mr-2', className)} disabled={isDisabled} />
    {children}
  </label>
);

export default Checkbox;
