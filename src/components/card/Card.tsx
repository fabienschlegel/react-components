import React, { ReactNode, ReactElement } from 'react';

import clsx from 'clsx';

import { CardHeaderProps } from '../card-header/CardHeader';
import { CardImageProps } from '../card-image/CardImage';
import { CardFooterProps } from '../card-footer/CardFooter';

export interface CardProps {
  children: ReactNode;
  className?: string;
  header?: ReactElement<CardHeaderProps>;
  image?: ReactElement<CardImageProps>;
  footer?: ReactElement<CardFooterProps>;
}

const Card: React.FC<CardProps> = ({ children, className, header, image, footer }) => (
  <div className={clsx('card', className)}>
    {header}
    {image}
    <div className="card-content">{children}</div>
    {footer}
  </div>
);

export default Card;
