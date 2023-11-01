import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface RadioElementProps {
  children: ReactNode;
  name: string;
  className?: string;
}

export type RadioElementType = RadioElementProps & React.InputHTMLAttributes<HTMLInputElement>;

const RadioElement: FunctionComponent<RadioElementType> = ({
  children,
  name,
  className,
  ...others
}) => (
  <label className={clsx('radio', className)}>
    <input type="radio" name={name} {...others} className="mr-1" />
    {children}
  </label>
);

export default RadioElement;
