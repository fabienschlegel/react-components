/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import MediaObject, { IMediaObjectProps } from './MediaObject';

export default {
  title: 'Layout/MediaObject',
  component: MediaObject,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 800 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IMediaObjectProps> = (args) => {
  const { children } = args;
  return <MediaObject {...args}>{children}</MediaObject>;
};

export const BasicMediaObject = Template.bind({});
BasicMediaObject.args = {
  children: (
    <>
      <MediaObject.Left src="https://via.placeholder.com/64" alt="Alternative Text" />
      <MediaObject.Content> Basic MediaObject </MediaObject.Content>
    </>
  ),
};
