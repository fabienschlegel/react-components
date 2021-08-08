import React from 'react';

import clsx from 'clsx';

import { SquaredDimensions } from '../../types';

interface MediaObjectLeftProps {
  src: string;
  alt: string;
  squaredDimensions?: SquaredDimensions;
  isRounded?: boolean;
  className?: string;
  imgClassName?: string;
}

export type MediaObjectLeftType = MediaObjectLeftProps & React.ImgHTMLAttributes<HTMLImageElement>;

const MediaObjectLeft: React.FC<MediaObjectLeftType> = ({
  src,
  alt,
  squaredDimensions,
  isRounded,
  className,
  imgClassName,
  ...others
}) => (
  <figure className={clsx('media-left', className)}>
    <p className={clsx('image', squaredDimensions)}>
      <img
        src={src}
        alt={alt}
        className={clsx(isRounded && 'is-rounded', imgClassName)}
        {...others}
      />
    </p>
  </figure>
);

export default MediaObjectLeft;
