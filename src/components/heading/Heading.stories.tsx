/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Heading, { IHeadingProps } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<IHeadingProps> = (args) => <Heading {...args}>{args.children}</Heading>;

export const BasicHeading = Template.bind({});
BasicHeading.args = {
  children: "It's a trap !",
};
