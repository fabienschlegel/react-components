import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import { SquaredDimensions } from '../../../types';

interface MediaLeftProps {
  src: string;
  alt: string;
  squaredDimensions?: SquaredDimensions;
  isRounded?: boolean;
  className?: string;
  imgClassName?: string;
}

export type MediaLeftType = MediaLeftProps & React.ImgHTMLAttributes<HTMLImageElement>;

const MediaLeft: FunctionComponent<MediaLeftType> = ({
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

export default MediaLeft;
