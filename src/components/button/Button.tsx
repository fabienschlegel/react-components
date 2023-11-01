import React, { FunctionComponent, ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Colors, AnotherColors, LightColors, Sizes, NoColors } from '../../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Sizes;
  color?: Colors | AnotherColors | NoColors | LightColors;
  isFullWidth?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  isRounded?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
  isStatic?: boolean;
  isResponsive?: boolean;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  size,
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
  isResponsive,
  className,
  ...others
}) => (
  <button
    className={clsx(
      'button',
      size,
      color,
      isFullWidth && 'is-fullwidth',
      isOutlined && 'is-outlined',
      isInverted && 'is-inverted',
      isRounded && 'is-rounded',
      isHovered && 'is-hovered',
      isFocused && 'is-focused',
      isActive && 'is-active',
      isLoading && 'is-loading',
      isStatic && 'is-static',
      isResponsive && 'is-responsive',
      className
    )}
    {...others}
  >
    {children}
  </button>
);
export default Button;
