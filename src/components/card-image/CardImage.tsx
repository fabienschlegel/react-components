import React, { ReactElement } from 'react';

import clsx from 'clsx';

import { ImageType } from '../image/Image';

export interface CardImageProps {
  children: ReactElement<ImageType>;
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ children, className }) => (
  <div className={clsx('card-image', className)}>{children}</div>
);

export default CardImage;
