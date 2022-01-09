import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface IMessageBodyProps {
  children: ReactNode;
  className?: string;
}

const MessageBody: FunctionComponent<IMessageBodyProps> = ({ children, className }) => (
  <div className={clsx('message-body', className)}>{children}</div>
);

export default MessageBody;
