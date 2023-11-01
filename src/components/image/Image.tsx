import React, { FunctionComponent, ImgHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Ratio, SquaredDimensions } from '../../types';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  squaredDimensions?: SquaredDimensions;
  ratio?: Ratio;
  isRounded?: boolean;
  className?: string;
  imgClassName?: string;
}

const Image: FunctionComponent<ImageProps> = ({
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
