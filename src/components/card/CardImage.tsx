import React from 'react';

import clsx from 'clsx';

import Image, { ImageType } from '../image/Image';

export interface CardImageProps {
  imageConfig: ImageType;
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ imageConfig, className }) => (
  <div className={clsx('card-image', className)}>
    <Image {...imageConfig} />
  </div>
);

export default CardImage;
