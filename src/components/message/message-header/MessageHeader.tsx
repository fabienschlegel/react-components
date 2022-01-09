import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../../delete/Delete';

export interface IMessageHeaderProps {
  children: ReactNode;
  onDelete: () => void;
  className?: string;
}

const MessageHeader: FunctionComponent<IMessageHeaderProps> = ({
  children,
  onDelete,
  className,
}) => (
  <div className={clsx('message-header', className)}>
    <p>{children}</p>
    <Delete onClick={onDelete} />
  </div>
);

export default MessageHeader;
