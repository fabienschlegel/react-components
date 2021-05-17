import React, { ReactNode } from 'react';

import clsx from 'clsx';

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
  icons?: IconsProps;
  isExpanded?: boolean;
  className?: string;
}

const Control: React.FC<ControlProps> = ({
  children,
  icons = {},
  isExpanded,
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
        isExpanded ? 'is-expanded' : undefined,
        leftIcon ? 'has-icons-left' : undefined,
        rightIcon ? 'has-icons-right' : undefined,
        className
      )}
    >
      {children}
      {leftIcon && (
        <span
          className={clsx('icon is-left', leftIconClassName)}
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
          className={clsx('icon is-right', rightIconClassName)}
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
