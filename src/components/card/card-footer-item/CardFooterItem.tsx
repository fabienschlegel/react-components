import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

export interface CardFooterItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const CardFooterItem: FunctionComponent<CardFooterItemProps> = ({
  children,
  className,
  ...others
}) => (
  <div className={clsx('card-footer-item', className)} {...others}>
    {children}
  </div>
);

export default CardFooterItem;
