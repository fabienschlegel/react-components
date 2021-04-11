import React, { ReactNode } from 'react';

import CardHeader, { CardHeaderProps } from './CardHeader';
import CardImage, { CardImageProps } from './CardImage';
import CardFooter, { CardFooterProps } from './CardFooter';

export interface CardProps {
  children: ReactNode;
  cardHeader?: CardHeaderProps;
  cardImage?: CardImageProps;
  cardFooter?: CardFooterProps;
}

const Card: React.FC<CardProps> = ({ children, cardHeader, cardImage, cardFooter }) => (
  <div className="card">
    {cardHeader ? <CardHeader {...cardHeader} /> : null}
    {cardImage ? <CardImage {...cardImage} /> : null}
    <div className="card-content">{children}</div>
    {cardFooter ? <CardFooter {...cardFooter} /> : null}
  </div>
);

export default Card;
