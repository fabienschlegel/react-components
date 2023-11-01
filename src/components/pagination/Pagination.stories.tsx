import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {},
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 1,
  lastPage: 10,
  pagesToShow: 5,
};
