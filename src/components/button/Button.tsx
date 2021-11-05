/* eslint-disable react/button-has-type */
import * as React from 'react';

import clsx from 'clsx';

import { Colors, AnotherColors, LightColors, Sizes } from '../../types';

interface IStyles {
  'is-outlined'?: boolean;
  'is-inverted'?: boolean;
  'is-rounded'?: boolean;
}

interface IStates {
  'is-hovered'?: boolean;
  'is-focused'?: boolean;
  'is-active'?: boolean;
  'is-loading'?: boolean;
  'is-static'?: boolean;
}

interface ButtonProps {
  children: React.ReactNode;
  size?: Sizes;
  color?: Colors | AnotherColors | LightColors;
  isFullWidth?: boolean;
  styles?: IStyles;
  states?: IStates;
  className?: string;
}

export type ButtonType = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonType> = ({
  children,
  size,
  color,
  isFullWidth,
  styles,
  states,
  className,
  ...others
}) => (
  <button
    className={clsx(
      'button',
      size,
      color,
      isFullWidth && 'is-fullwidth',
      styles,
      states,
      className
    )}
    {...others}
  >
    {children}
  </button>
);
export default Button;
