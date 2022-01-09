import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from 'types';
import ControlIcon from './control-icon/ControlIcon';

export interface IconsProps {
  leftIcon?: ReactNode;
  leftIconClassName?: string;
  rightIcon?: ReactNode;
  rightIconClassName?: string;
  handleLeftIconClick?: () => void;
  handleRightIconClick?: () => void;
}
interface IControlProps {
  children: ReactNode;
  size?: Sizes;
  icons?: IconsProps;
  isExpanded?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Control: FunctionComponent<IControlProps> = ({
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
        isExpanded && 'is-expanded',
        isLoading && 'is-loading',
        leftIcon && 'has-icons-left',
        rightIcon && 'has-icons-right',
        className
      )}
    >
      {children}
      {leftIcon && (
        <ControlIcon side="is-left" handleClick={handleLeftIconClick} className={leftIconClassName}>
          {leftIcon}
        </ControlIcon>
      )}
      {rightIcon && (
        <ControlIcon
          side="is-right"
          handleClick={handleRightIconClick}
          className={rightIconClassName}
        >
          {rightIcon}
        </ControlIcon>
      )}
    </div>
  );
};

export default Control;
