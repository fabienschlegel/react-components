import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { flexDecorator } from '../../../stories';

import mdx from './Column.mdx';

import Column, { ColumnProps } from './Column';

export default {
  title: 'Layout/Column',
  component: Column,
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
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args}>{args.children}</Column>;

export const BasicColumn = Template.bind({});
BasicColumn.args = {
  children: 'First column',
  className: 'has-background-primary',
};

BasicColumn.storyName = 'Column';
