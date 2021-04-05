/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Delete from 'components/delete/Delete';

import Tag, { TagProps } from './Tag';
import { Color, Size } from './types';

export default {
  title: 'Tag',
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.values(Color),
      },
    },
    isRounded: {
      control: {
        type: 'boolean',
      },
    },

    isDelete: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args}>{args.children}</Tag>;

export const BasicTag = Template.bind({});
BasicTag.args = {
  children: "It's a tag",
};

export const TagWithDelete = Template.bind({});
TagWithDelete.args = {
  children: (
    <>
      It&apos;s a tag
      <Delete />
    </>
  ),
};
