import React, { ReactElement } from 'react';

import clsx from 'clsx';

import { CardFooterItemProps } from '../card-footer-item/CardFooterItem';

export interface CardFooterProps {
  children: ReactElement<CardFooterItemProps> | Array<ReactElement<CardFooterItemProps>>;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
  <footer className={clsx('card-footer', className)}>{children}</footer>
);

export default CardFooter;
