import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { decorator } from '../../../stories';

import mdx from './Image.mdx';

import Image, { ImageProps } from './Image';

export default {
  title: 'Elements/Image',
  component: Image,
  decorators: [decorator],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
      source: {
        excludeDecorators: true,
      },
    },
  },
} as ComponentMeta<FunctionComponent<ImageProps>>;

const Template: ComponentStory<FunctionComponent<ImageProps>> = (args) => <Image {...args} />;

export const BasicImage = Template.bind({});
BasicImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Alternative Text',
};

BasicImage.storyName = 'Image';
