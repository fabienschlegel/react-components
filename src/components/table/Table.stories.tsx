/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { fakeTableData, fakeTableConfig } from '../../__fake__/fakeData';

import Table, { TableProps } from './Table';

import { FakeDataType } from '../../__fake__/types';

export default {
  title: 'Table',
  component: Table,
  args: {},
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: '0px auto', width: 1024 }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TableProps<FakeDataType>> = (args) => <Table {...args} />;

export const BasicTable = Template.bind({});
BasicTable.args = {
  data: fakeTableData,
  config: fakeTableConfig,
};

export const HoverableTable = Template.bind({});
HoverableTable.args = {
  ...BasicTable.args,
  config: {
    ...BasicTable.args.config,
    isHoverable: true,
  },
};

export const FullWidthTable = Template.bind({});
FullWidthTable.args = {
  ...BasicTable.args,
  config: {
    ...BasicTable.args.config,
    isFullWidth: true,
  },
};

export const WithFooterTable = Template.bind({});
WithFooterTable.args = {
  ...BasicTable.args,
  config: {
    ...BasicTable.args.config,
    hasTableFooter: true,
  },
};
