import React, { ReactNode } from 'react';

interface CheckboxProps {
  children: ReactNode;
  isDisabled?: boolean;
}

export type CheckboxType = CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxType> = ({ children, isDisabled, ...others }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="checkbox">
    <input type="checkbox" {...others} className="mr-2" disabled={isDisabled} />
    {children}
  </label>
);

export default Checkbox;
