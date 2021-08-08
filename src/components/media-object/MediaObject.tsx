import React, { ReactNode } from 'react';

import clsx from 'clsx';

import MediaObjectLeft, { MediaObjectLeftType } from '../media-object-left/MediaObjectLeft';

export interface MediaObjectProps {
  children: ReactNode;
  mediaObjectLeft: MediaObjectLeftType;
  mediaRight?: ReactNode;
  className?: string;
}

const MediaObject: React.FC<MediaObjectProps> = ({
  children,
  mediaObjectLeft,
  mediaRight,
  className,
}) => (
  <article className={clsx('media', className)}>
    <MediaObjectLeft {...mediaObjectLeft} />
    <div className="media-content">{children}</div>
    {mediaRight && <div className="media-right">{mediaRight}</div>}
  </article>
);

export default MediaObject;
