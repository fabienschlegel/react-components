import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import { Colors } from '../../types';

export interface NotificationProps {
  children: ReactNode | string;
  color?: Colors;
  isLight?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({
  children,
  color,
  isLight,
  onClick,
  className,
}) => (
  <div className={clsx('notification', color, isLight ? 'is-light' : undefined, className)}>
    <Delete onClick={onClick} />
    {children}
  </div>
);

export default Notification;
