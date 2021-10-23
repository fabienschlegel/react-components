import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from 'types';

export interface IconsProps {
  leftIcon?: ReactNode;
  leftIconClassName?: string;
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}
interface ControlProps {
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

  const clickable = { cursor: 'pointer', 'pointer-events': 'initial' };

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
          className={clsx('icon is-left', leftIconClassName)}
          onClick={handleLeftIconClick}
          onKeyDown={handleLeftIconClick}
          style={handleLeftIconClick ? clickable : {}}
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
          style={handleRightIconClick ? clickable : {}}
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
