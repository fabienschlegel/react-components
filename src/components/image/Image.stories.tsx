/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Image, { ImageType } from './Image';

export default {
  title: 'Elements/Image',
  component: Image,
  args: {},
} as Meta;

const Template: Story<ImageType> = (args) => <Image {...args} />;

export const BasicImage = Template.bind({});
BasicImage.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Alternative Text',
};
