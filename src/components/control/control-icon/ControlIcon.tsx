import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface IControlIconProps {
  children: ReactNode;
  side: 'is-left' | 'is-right';
  handleClick?: () => void;
  className?: string;
}

const ControlIcon: FunctionComponent<IControlIconProps> = ({
  children,
  side,
  handleClick,
  className,
}) => (
  <span
    className={clsx('icon', handleClick && 'is-clickable', side, className)}
    onClick={handleClick}
    onKeyDown={handleClick}
    role="button"
    tabIndex={0}
  >
    {children}
  </span>
);

export default ControlIcon;
