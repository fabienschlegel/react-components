import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import MessageHeader, { IMessageHeaderProps } from './message-header/MessageHeader';
import MessageBody, { IMessageBodyProps } from './message-body/MessageBody';

import { Colors, Sizes } from '../../types';

interface MessageComposition {
  Header: FunctionComponent<IMessageHeaderProps>;
  Body: FunctionComponent<IMessageBodyProps>;
}

export interface IMessageProps {
  children: ReactNode;
  size?: Omit<Sizes, 'is-normal'>;
  color?: Colors | 'is-dark';
  className?: string;
}

type MessageType = FunctionComponent<IMessageProps> & MessageComposition;

const Message: MessageType = ({ children, size, color, className }) => (
  <article className={clsx('message', size, color, className)}>{children}</article>
);

Message.Header = MessageHeader;
Message.Body = MessageBody;

export default Message;
