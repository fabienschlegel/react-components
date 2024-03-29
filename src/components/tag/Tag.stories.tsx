import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Delete from '../delete/Delete';

import Tag, { TagProps } from './Tag';

export default {
  title: 'Elements/Tag',
  component: Tag,
} as ComponentMeta<FunctionComponent<TagProps>>;

const Template: ComponentStory<FunctionComponent<TagProps>> = (args) => {
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
