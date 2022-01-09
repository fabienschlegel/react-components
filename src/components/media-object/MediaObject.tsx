import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import MediaLeft, { MediaLeftType } from './media-left/MediaLeft';
import MediaElement, { IMediaElementProps } from './media-element/MediaElement';

interface MediaObjectComposition {
  Left: FunctionComponent<MediaLeftType>;
  Content: FunctionComponent<Omit<IMediaElementProps, 'type'>>;
  Right: FunctionComponent<Omit<IMediaElementProps, 'type'>>;
}
export interface IMediaObjectProps {
  children: ReactNode;
  className?: string;
}

type MediaObjectType = FunctionComponent<IMediaObjectProps> & MediaObjectComposition;

const MediaObject: MediaObjectType = ({ children, className }) => (
  <article className={clsx('media', className)}>{children}</article>
);

MediaObject.Left = MediaLeft;
MediaObject.Content = (args) => <MediaElement {...args} type="content" />;
MediaObject.Right = (args) => <MediaElement {...args} type="right" />;

export default MediaObject;
