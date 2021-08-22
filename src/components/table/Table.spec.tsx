/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount, ReactWrapper } from 'enzyme';

import { fakeTableData, fakeTableConfig } from '../../__fake__/fakeData';

import { FakeDataType } from '../../__fake__/types';

import Table from './Table';

describe('Test Table', () => {
  it('Mount Table', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={fakeTableConfig} />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Test Table is bordered', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, isBordered: true }} />
    );

    const table = wrapper.find('.table').hasClass('is-bordered');
    expect(table).toBeTruthy();
  });

  it('Test Table is striped', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, isStriped: true }} />
    );

    const table = wrapper.find('.table').hasClass('is-striped');
    expect(table).toBeTruthy();
  });

  it('Test Table is narrow', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, isNarrow: true }} />
    );

    const table = wrapper.find('.table').hasClass('is-narrow');
    expect(table).toBeTruthy();
  });

  it('Test Table is hoverable', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, isHoverable: true }} />
    );

    const table = wrapper.find('.table').hasClass('is-hoverable');
    expect(table).toBeTruthy();
  });

  it('Test Table is fullwidth', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, isFullWidth: true }} />
    );

    const table = wrapper.find('.table').hasClass('is-fullwidth');
    expect(table).toBeTruthy();
  });

  it('Test Table has footer', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, hasTableFooter: true }} />
    );

    const tableFooter = wrapper.find('tfoot').exists();
    expect(tableFooter).toBeTruthy();
  });
});
