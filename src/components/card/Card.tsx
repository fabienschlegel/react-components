import React, { ReactNode, FunctionComponent, HTMLAttributes } from 'react';

import clsx from 'clsx';

import CardHeader, { CardHeaderProps } from './card-header/CardHeader';
import CardContent, { CardContentProps } from './card-content/CardContent';
import CardImage, { CardImageType } from './card-image/CardImage';
import CardFooter, { CardFooterType } from './card-footer/CardFooter';

interface CardComposition {
  Header: FunctionComponent<CardHeaderProps>;
  Content: FunctionComponent<CardContentProps>;
  Image: CardImageType;
  Footer: CardFooterType;
}
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card: FunctionComponent<CardProps> & CardComposition = ({
  children,
  className,
  ...others
}) => (
  <div className={clsx('card', className)} {...others}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;
