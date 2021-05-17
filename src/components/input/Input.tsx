import React from 'react';

import clsx from 'clsx';

import { Colors, Sizes } from '../../types';

interface InputProps {
  inputSize?: Sizes;
  borderColor?: Colors;
  isRounded?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isLoading?: boolean;
  isStatic?: boolean;
}

export type InputType = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputType> = ({
  inputSize,
  borderColor,
  isRounded,
  isHovered,
  isFocused,
  isLoading,
  isStatic,
  className,
  ...others
}) => (
  <input
    className={clsx(
      'input',
      inputSize,
      borderColor,
      isRounded ? 'is-rounded' : undefined,
      isHovered ? 'is-hovered' : undefined,
      isFocused ? 'is-focused' : undefined,
      isLoading ? 'is-loading' : undefined,
      isStatic ? 'is-static' : undefined,
      className
    )}
    {...others}
  />
);

export default Input;
