import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface MessageBodyProps {
  children: ReactNode;
  className?: string;
}

const MessageBody: FunctionComponent<MessageBodyProps> = ({ children, className }) => (
  <div className={clsx('message-body', className)}>{children}</div>
);

export default MessageBody;
