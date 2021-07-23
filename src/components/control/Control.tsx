import React, { ReactNode } from 'react';

import clsx from 'clsx';

import './Control.css';

import { Sizes } from 'types';

export interface IconsProps {
  leftIcon?: ReactNode;
  leftIconClassName?: string;
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}
export interface ControlProps {
  children: ReactNode;
  size?: Sizes;
  icons?: IconsProps;
  isExpanded?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Control: React.FC<ControlProps> = ({
  children,
  size,
  icons = {},
  isExpanded,
  isLoading,
  className,
}) => {
  const {
    leftIcon,
    leftIconClassName,
    rightIcon,
    rightIconClassName,
    handleLeftIconClick,
    handleRightIconClick,
  } = icons;

  return (
    <div
      className={clsx(
        'control',
        size,
        isExpanded ? 'is-expanded' : undefined,
        isLoading ? 'is-loading' : undefined,
        leftIcon ? 'has-icons-left' : undefined,
        rightIcon ? 'has-icons-right' : undefined,
        className
      )}
    >
      {children}
      {leftIcon && (
        <span
          className={clsx(
            'icon is-left',
            handleLeftIconClick && 'clickable',
            leftIconClassName
          )}
          onClick={handleLeftIconClick}
          onKeyDown={handleLeftIconClick}
          role="button"
          tabIndex={0}
        >
          {leftIcon}
        </span>
      )}
      {rightIcon && (
        <span
          className={clsx(
            'icon is-right',
            handleRightIconClick && 'clickable',
            rightIconClassName
          )}
          onClick={handleRightIconClick}
          onKeyDown={handleRightIconClick}
          role="button"
          tabIndex={0}
        >
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default Control;
