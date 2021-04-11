/* eslint-disable react/button-has-type */
import * as React from 'react';
import clsx from 'clsx';

import { Color, Size } from './types';

interface ButtonProps {
  children: React.ReactNode;
  size?: Size;
  color?: Color;
  isFullWidth?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  isRounded?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  isStatic?: boolean;
  className?: string;
}

export type ButtonType = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonType> = ({
  children,
  size = Size.Normal,
  color,
  isFullWidth,
  isOutlined,
  isInverted,
  isRounded,
  isHovered,
  isFocused,
  isActive,
  isLoading,
  isStatic,
  className,
  ...others
}) => (
  <button
    className={clsx(
      'button',
      size,
      color,
      isFullWidth ? 'is-fullwidth' : undefined,
      isOutlined ? 'is-outlined' : undefined,
      isInverted ? 'is-inverted' : undefined,
      isRounded ? 'is-rounded' : undefined,
      isHovered ? 'is-hovered' : undefined,
      isFocused ? 'is-focused' : undefined,
      isActive ? 'is-active' : undefined,
      isLoading ? 'is-loading' : undefined,
      isStatic ? 'is-static' : undefined,
      className
    )}
    {...others}
  >
    {children}
  </button>
);
export default Button;
