/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Delete from '../delete/Delete';

import Tag, { ITagProps } from './Tag';

export default {
  title: 'Elements/Tag',
  component: Tag,
  args: {},
} as Meta;

const Template: Story<ITagProps> = (args) => {
  const { children } = args;
  return <Tag {...args}>{children}</Tag>;
};

export const BasicTag = Template.bind({});
BasicTag.args = {
  children: "It's a tag",
};

export const TagWithDelete = Template.bind({});
TagWithDelete.args = {
  children: (
    <>
      It&apos;s a tag
      <Delete size="is-small" />
    </>
  ),
};
