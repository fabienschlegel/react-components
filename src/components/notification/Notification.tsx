import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import Color from './types';

export interface NotificationProps {
  children: ReactNode | string;
  color?: Color;
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
  <div
    className={clsx('notification', color, isLight ? 'is-light' : undefined, className)}
  >
    <Delete onClick={onClick} />
    {children}
  </div>
);

export default Notification;
