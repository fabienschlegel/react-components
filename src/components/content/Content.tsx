import React, { ReactNode } from 'react';

import clsx from 'clsx';

import Size from './types';

export type ContentType = {
  children: ReactNode | string;
  size?: Size;
  className?: string;
};

const Content: React.FC<ContentType> = ({ children, size, className }) => (
  <div className={clsx('content', size, className)}>{children}</div>
);

export default Content;
