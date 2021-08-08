/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import MediaObject, { MediaObjectProps } from './MediaObject';

export default {
  title: 'MediaObject',
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

const Template: Story<MediaObjectProps> = (args) => {
  const { children } = args;
  return <MediaObject {...args}>{children}</MediaObject>;
};

export const BasicMediaObject = Template.bind({});
BasicMediaObject.args = {
  children: 'Basic MediaObject',
  mediaObjectLeft: {
    src: 'https://via.placeholder.com/64',
    alt: 'Alternative Text',
  },
};
