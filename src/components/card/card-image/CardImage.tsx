import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import Image, { ImageProps } from '../../image/Image';

interface CardImageComposition {
  Image: FunctionComponent<ImageProps>;
}

interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export type CardImageType = FunctionComponent<CardImageProps> & CardImageComposition;

const CardImage: CardImageType = ({ children, className, ...others }) => (
  <div className={clsx('card-image', className)} {...others}>
    {children}
  </div>
);

CardImage.Image = Image;

export default CardImage;
