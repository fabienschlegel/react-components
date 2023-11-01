import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { flexDecorator } from '../../../stories';

import mdx from './MediaObject.mdx';

import MediaObject, { MediaObjectType } from './MediaObject';

export default {
  title: 'Layout/MediaObject',
  component: MediaObject,
  decorators: [flexDecorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<MediaObjectType>;

const Template: ComponentStory<MediaObjectType> = (args) => {
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

BasicMediaObject.storyName = 'MediaObject';
