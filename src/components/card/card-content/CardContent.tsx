import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardContent: FunctionComponent<CardContentProps> = ({ children, className, ...others }) => (
  <div className={clsx('card-content', className)} {...others}>
    {children}
  </div>
);

export default CardContent;
