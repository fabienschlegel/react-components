import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import { Ratio, SquaredDimensions } from '../../types';

interface ImageProps {
  src: string;
  alt: string;
  squaredDimensions?: SquaredDimensions;
  ratio?: Ratio;
  isRounded?: boolean;
  className?: string;
  imgClassName?: string;
}

export type ImageType = ImageProps & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: FunctionComponent<ImageType> = ({
  src,
  alt,
  squaredDimensions,
  ratio,
  isRounded,
  className,
  imgClassName,
  ...others
}) => (
  <figure className={clsx('image', squaredDimensions, ratio, className)}>
    <img
      src={src}
      alt={alt}
      className={clsx(isRounded && 'is-rounded', imgClassName)}
      {...others}
    />
  </figure>
);

export default Image;
