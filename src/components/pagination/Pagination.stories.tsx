/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Alignment, Size } from './types';

import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'Pagination',
  args: {},
  argTypes: {
    changePage: { action: 'clicked' },
    alignment: {
      control: {
        type: 'select',
        options: Object.values(Alignment),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(Size),
      },
    },
    isRounded: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 1,
  lastPage: 10,
  pagesToShow: 5,
};
