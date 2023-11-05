import { FunctionComponent, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import { Colors, LightColors } from '../../types';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string;
  color?: Colors | LightColors;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  className?: string;
}

const Notification: FunctionComponent<NotificationProps> = ({
  children,
  color,
  onClick,
  className,
  ...others
}) => (
  <div className={clsx('notification', color, className)} {...others}>
    <Delete onClick={onClick} />
    {children}
  </div>
);

export default Notification;
