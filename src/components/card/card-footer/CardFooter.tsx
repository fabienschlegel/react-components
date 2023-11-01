import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import CardFooterItem, { CardFooterItemProps } from '../card-footer-item/CardFooterItem';

interface CardFooterComposition {
  Item: FunctionComponent<CardFooterItemProps>;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export type CardFooterType = FunctionComponent<CardFooterProps> & CardFooterComposition;

const CardFooter: CardFooterType = ({ children, className, ...others }) => (
  <footer className={clsx('card-footer', className)} {...others}>
    {children}
  </footer>
);

CardFooter.Item = CardFooterItem;

export default CardFooter;
