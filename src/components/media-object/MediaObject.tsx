import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import MediaLeft, { MediaLeftType } from './media-left/MediaLeft';
import MediaElement, { MediaElementProps } from './media-element/MediaElement';

interface MediaObjectComposition {
  Left: FunctionComponent<MediaLeftType>;
  Content: FunctionComponent<Omit<MediaElementProps, 'type'>>;
  Right: FunctionComponent<Omit<MediaElementProps, 'type'>>;
}
interface MediaObjectProps {
  children: ReactNode;
  className?: string;
}

export type MediaObjectType = FunctionComponent<MediaObjectProps> & MediaObjectComposition;

const Content: FunctionComponent<Omit<MediaElementProps, 'type'>> = (args) => (
  <MediaElement {...args} type="content" />
);
const Right: FunctionComponent<Omit<MediaElementProps, 'type'>> = (args) => (
  <MediaElement {...args} type="right" />
);

const MediaObject: MediaObjectType = ({ children, className }) => (
  <article className={clsx('media', className)}>{children}</article>
);

MediaObject.Left = MediaLeft;
MediaObject.Content = Content;
MediaObject.Right = Right;

export default MediaObject;
