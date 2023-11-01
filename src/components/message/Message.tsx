import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import MessageHeader, { MessageHeaderProps } from './message-header/MessageHeader';
import MessageBody, { MessageBodyProps } from './message-body/MessageBody';

import { Colors, Sizes } from '../../types';

interface MessageComposition {
  Header: FunctionComponent<MessageHeaderProps>;
  Body: FunctionComponent<MessageBodyProps>;
}

export interface MessageProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: Omit<Sizes, 'is-normal'>;
  color?: Colors | 'is-dark';
  className?: string;
}

type MessageType = FunctionComponent<MessageProps> & MessageComposition;

const Message: MessageType = ({ children, size, color, className, ...others }) => (
  <article className={clsx('message', size, color, className)} {...others}>
    {children}
  </article>
);

Message.Header = MessageHeader;
Message.Body = MessageBody;

export default Message;
