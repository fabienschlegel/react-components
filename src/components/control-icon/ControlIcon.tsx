import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

interface ControlIconProps {
  children: ReactNode;
  side: 'is-left' | 'is-right';
  handleClick?: () => void;
  className?: string;
}

const ControlIcon: FunctionComponent<ControlIconProps> = ({
  children,
  side,
  handleClick,
  className,
}) => {
  const clickable = { cursor: 'pointer', 'pointer-events': 'initial' };

  return (
    <span
      className={clsx('icon', side, className)}
      onClick={handleClick}
      onKeyDown={handleClick}
      style={handleClick ? clickable : {}}
      role="button"
      tabIndex={0}
    >
      {children}
    </span>
  );
};

export default ControlIcon;
