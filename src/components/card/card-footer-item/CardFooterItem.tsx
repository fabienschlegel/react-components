import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ICardFooterItemProps {
  children: ReactNode;
  className?: string;
}

const CardFooterItem: FunctionComponent<ICardFooterItemProps> = ({ children, className }) => (
  <div className={clsx('card-footer-item', className)}>{children}</div>
);

export default CardFooterItem;
