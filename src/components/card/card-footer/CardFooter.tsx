import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import CardFooterItem, { ICardFooterItemProps } from '../card-footer-item/CardFooterItem';

interface ICardFooterComposition {
  Item: FunctionComponent<ICardFooterItemProps>;
}

interface ICardFooterProps {
  children: ReactNode;
  className?: string;
}

export type CardFooterType = FunctionComponent<ICardFooterProps> & ICardFooterComposition;

const CardFooter: CardFooterType = ({ children, className }) => (
  <footer className={clsx('card-footer', className)}>{children}</footer>
);

CardFooter.Item = CardFooterItem;

export default CardFooter;
