import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | string;
  className?: string;
}

const Block: FunctionComponent<BlockProps> = ({ children, className, ...others }) => (
  <div className={clsx('block', className)} {...others}>
    {children}
  </div>
);

export default Block;
