import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Image, { ImageType } from '../../image/Image';

interface ICardImageComposition {
  Image: FunctionComponent<ImageType>;
}

interface ICardImageProps {
  children: ReactNode;
  className?: string;
}

export type CardImageType = FunctionComponent<ICardImageProps> & ICardImageComposition;

const CardImage: CardImageType = ({ children, className }) => (
  <div className={clsx('card-image', className)}>{children}</div>
);

CardImage.Image = Image;

export default CardImage;
