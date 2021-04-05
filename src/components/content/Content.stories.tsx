/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Content, { ContentType } from './Content';
import Size from './types';

export default {
  title: 'Content',
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
  },
} as Meta;

const Template: Story<ContentType> = (args) => (
  <Content {...args}>{args.children}</Content>
);

export const BasicContent = Template.bind({});
BasicContent.args = {
  children: <p>It&apos;s a trap !</p>,
};
