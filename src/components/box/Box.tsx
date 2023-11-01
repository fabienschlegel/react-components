import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Box: FunctionComponent<BoxProps> = ({ children, className, ...others }) => (
  <div className={clsx('box', className)} {...others}>
    {children}
  </div>
);

export default Box;
