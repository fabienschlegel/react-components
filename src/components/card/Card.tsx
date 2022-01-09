import React, { ReactNode, FunctionComponent } from 'react';

import clsx from 'clsx';

import CardHeader, { ICardHeaderProps } from './card-header/CardHeader';
import CardContent, { ICardContentProps } from './card-content/CardContent';
import CardImage, { CardImageType } from './card-image/CardImage';
import CardFooter, { CardFooterType } from './card-footer/CardFooter';

interface ICardComposition {
  Header: FunctionComponent<ICardHeaderProps>;
  Content: FunctionComponent<ICardContentProps>;
  Image: CardImageType;
  Footer: CardFooterType;
}
export interface ICardProps {
  children: ReactNode;
  className?: string;
}

const Card: FunctionComponent<ICardProps> & ICardComposition = ({ children, className }) => (
  <div className={clsx('card', className)}>{children}</div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;
