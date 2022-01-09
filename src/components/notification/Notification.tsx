import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import { Colors } from '../../types';

export interface INotificationProps {
  children: ReactNode | string;
  color?: Colors;
  isLight?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Notification: FunctionComponent<INotificationProps> = ({
  children,
  color,
  isLight,
  onClick,
  className,
}) => (
  <div className={clsx('notification', color, isLight && 'is-light', className)}>
    <Delete onClick={onClick} />
    {children}
  </div>
);

export default Notification;
