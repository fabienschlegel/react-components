/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { fakeTableData, fakeTableConfig, fakeSortableTableConfig } from '../../__fake__/fakeData';

import Table, { ITableProps } from './Table';

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

const Template: Story<ITableProps<FakeDataType>> = (args) => <Table {...args} />;

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

export const SortableTable = Template.bind({});

SortableTable.args = {
  ...BasicTable.args,
  config: fakeSortableTableConfig,
};

export const CustomIconSortableTable = Template.bind({});

CustomIconSortableTable.args = {
  ...BasicTable.args,
  config: {
    ...fakeSortableTableConfig,
    ascendantSortIcon: <FontAwesomeIcon icon={faCaretUp} />,
    descendantSortIcon: <FontAwesomeIcon icon={faCaretDown} />,
  },
};
