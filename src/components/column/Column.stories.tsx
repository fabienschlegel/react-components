/* eslint-disable import/no-extraneous-dependencies, react/destructuring-assignment */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Column, { ColumnType } from './Column';

export default {
  title: 'Column',
  component: Column,
  args: {},
} as Meta;

const Template: Story<ColumnType> = (args) => <Column {...args}>{args.children}</Column>;

export const BasicColumn = Template.bind({});
BasicColumn.args = {
  children: 'First column',
  className: 'has-background-primary',
};
