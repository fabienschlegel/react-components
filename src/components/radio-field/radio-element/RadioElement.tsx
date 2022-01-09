import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface IRadioElementProps {
  children: ReactNode;
  name: string;
  className?: string;
}

export type RadioElementType = IRadioElementProps & React.InputHTMLAttributes<HTMLInputElement>;

const RadioElement: FunctionComponent<RadioElementType> = ({
  children,
  name,
  className,
  ...others
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={clsx('radio', className)}>
    <input type="radio" name={name} {...others} className="mr-1" />
    {children}
  </label>
);

export default RadioElement;
