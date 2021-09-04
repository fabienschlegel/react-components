import React, { ReactNode } from 'react';

interface RadioElementProps {
  children: ReactNode;
  name: string;
}

export type RadioElementType = RadioElementProps & React.InputHTMLAttributes<HTMLInputElement>;

const RadioElement: React.FC<RadioElementType> = ({ children, name, ...others }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="radio">
    <input type="radio" name={name} {...others} className="mr-1" />
    {children}
  </label>
);

export default RadioElement;
