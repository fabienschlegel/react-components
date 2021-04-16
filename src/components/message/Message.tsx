import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Delete from '../delete/Delete';

import { Color, Size } from './types';

export interface MessageProps {
  message: string | ReactNode;
  header?: string;
  onDelete?: () => void;
  size?: Size;
  color?: Color;
}

const Message: React.FC<MessageProps> = ({ message, header, onDelete, size, color }) => (
  <article className={clsx('message', size, color)}>
    {header ? (
      <div className="message-header">
        <p>{header}</p>
        <Delete onClick={onDelete} />
      </div>
    ) : null}
    <div className="message-body">{message}</div>
  </article>
);

export default Message;
