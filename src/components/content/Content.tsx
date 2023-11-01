import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { Sizes } from '../../types';

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | string;
  size?: Sizes;
  className?: string;
}

const Content: FunctionComponent<ContentProps> = ({ children, size, className, ...others }) => (
  <div className={clsx('content', size, className)} {...others}>
    {children}
  </div>
);

export default Content;
