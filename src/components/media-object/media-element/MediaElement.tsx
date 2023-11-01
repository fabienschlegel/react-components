import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface MediaElementProps {
  children: ReactNode;
  type: 'content' | 'right';
  className?: string;
}

const MediaElement: FunctionComponent<MediaElementProps> = ({ children, type, className }) => (
  <div className={clsx(`media-${type}`, className)}>{children}</div>
);

export default MediaElement;
