import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

export interface ICardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: FunctionComponent<ICardContentProps> = ({ children, className }) => (
  <div className={clsx('card-content', className)}>{children}</div>
);

export default CardContent;
