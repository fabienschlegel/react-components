/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Image, { ImageProps } from './Image';
import { SquaredDimensions, Ratio } from './types';

export default {
  title: 'Image',
  args: {},
  argTypes: {
    squaredDimensions: {
      control: {
        type: 'select',
        options: Object.values(SquaredDimensions),
      },
    },
    ratio: {
      control: {
        type: 'select',
        options: Object.values(Ratio),
      },
    },
    isRounded: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const BasicImage = Template.bind({});
BasicImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Alternative Text',
};
