import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import ControlIcon from './control-icon/ControlIcon';

import { Sizes } from 'types';

export interface IconsProps {
  icon?: ReactNode;
  className?: string;
  handleIconClick?: () => void;
}
interface ControlProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: Sizes;
  leftIcon?: IconsProps;
  rightIcon?: IconsProps;
  isExpanded?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Control: FunctionComponent<ControlProps> = ({
  children,
  size,
  leftIcon,
  rightIcon,
  isExpanded,
  isLoading,
  className,
  ...others
}) => {
  return (
    <div
      className={clsx(
        'control',
        size,
        isExpanded && 'is-expanded',
        isLoading && 'is-loading',
        leftIcon && 'has-icons-left',
        rightIcon && 'has-icons-right',
        className
      )}
      {...others}
    >
      {children}
      {leftIcon && (
        <ControlIcon
          side="is-left"
          handleClick={leftIcon.handleIconClick}
          className={leftIcon.className}
        >
          {leftIcon.icon}
        </ControlIcon>
      )}
      {rightIcon && (
        <ControlIcon
          side="is-right"
          handleClick={rightIcon.handleIconClick}
          className={rightIcon.className}
        >
          {rightIcon.icon}
        </ControlIcon>
      )}
    </div>
  );
};

export default Control;
