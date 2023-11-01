import React, { FunctionComponent, InputHTMLAttributes } from 'react';

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

export type InputType = InputProps & InputHTMLAttributes<HTMLInputElement>;

const Input: FunctionComponent<InputType> = ({
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
      isRounded && 'is-rounded',
      isHovered && 'is-hovered',
      isFocused && 'is-focused',
      isLoading && 'is-loading',
      isStatic && 'is-static',
      className
    )}
    {...others}
  />
);

export default Input;
