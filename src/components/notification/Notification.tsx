import { FunctionComponent, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import { Colors } from '../../types';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string;
  color?: Colors;
  isLight?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  className?: string;
}

const Notification: FunctionComponent<NotificationProps> = ({
  children,
  color,
  isLight,
  onClick,
  className,
  ...others
}) => (
  <div className={clsx('notification', color, isLight && 'is-light', className)} {...others}>
    <Delete onClick={onClick} />
    {children}
  </div>
);

export default Notification;
