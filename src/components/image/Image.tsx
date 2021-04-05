import React from 'react';

import clsx from 'clsx';
import { Ratio, SquaredDimensions } from './types';

export interface ImageProps {
  src: string;
  alt: string;
  squaredDimensions?: SquaredDimensions;
  ratio?: Ratio;
  isRounded?: boolean;
  className?: string;
  imgClassName?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  squaredDimensions,
  ratio,
  isRounded,
  className,
  imgClassName,
}) => (
  <figure className={clsx('image', squaredDimensions, ratio, className)}>
    <img
      src={src}
      alt={alt}
      className={clsx(isRounded ? 'is-rounded' : undefined, imgClassName)}
    />
  </figure>
);

export default Image;
