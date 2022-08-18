/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import Pagination, { IPaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {},
} as Meta;

const Template: Story<IPaginationProps> = (args) => <Pagination {...args} />;

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  currentPage: 1,
  lastPage: 10,
  pagesToShow: 5,
};
