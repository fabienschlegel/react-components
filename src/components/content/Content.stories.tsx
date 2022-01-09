/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Content, { IContentProps } from './Content';

export default {
  title: 'Content',
  component: Content,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<IContentProps> = (args) => <Content {...args}>{args.children}</Content>;

export const BasicContent = Template.bind({});
BasicContent.args = {
  children: <p>It&apos;s a trap !</p>,
};
