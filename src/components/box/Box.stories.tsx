/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Box, { IBoxProps } from './Box';

export default {
  title: 'Box',
  component: Box,
  args: {},
} as Meta;

const Template: Story<IBoxProps> = (args) => <Box {...args}>{args.children}</Box>;

export const TextBox = Template.bind({});
TextBox.args = {
  children: "It's a trap !",
};
