/* eslint-disable no-undef */
import React from 'react';

import '../../setupTests';

import { mount, ReactWrapper } from 'enzyme';

import { fakeTableConfig } from '../../__fake__/fakeData';

import TableHeads from './TableHeads';

import { FakeDataType } from '../../__fake__/types';

describe('Test TableHeads', () => {
  const handleSort = jest.fn();
  const onHeaderCellsClick = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableHeads', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads config={fakeTableConfig} sortOrders={[]} noSort />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Test TableHeads with text align to left', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', align: 'left' },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );

    const firstHeadCase = wrapper.find('th').at(0).hasClass('has-text-left');
    expect(firstHeadCase).toBeTruthy();
  });

  it('Test TableHeads, column head has no label', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [{ value: 'id' }, ...fakeTableConfig.columns.slice(1)],
        }}
        sortOrders={[]}
        noSort
      />
    );
    const firstHeadCase = wrapper.find('th').at(0);

    expect(firstHeadCase.text()).toEqual('');
  });

  it('Test TableHeads, column head render a node', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: () => <span>Column Head</span> },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );
    const firstHeadCase = wrapper.find('span');

    expect(firstHeadCase.text()).toEqual('Column Head');
  });

  it('Test TableHeads with sort ascendant', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['asc']}
        noSort
      />
    );

    const firstHeadCase = wrapper.find('th').at(0);

    const ascendantIcon = firstHeadCase.find('svg').hasClass('fa-caret-up');

    expect(ascendantIcon).toBeTruthy();
  });

  it('Test TableHeads with sort descendant', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['desc']}
        noSort
      />
    );

    const firstHeadCase = wrapper.find('th').at(0);

    const descendantIcon = firstHeadCase.find('svg').hasClass('fa-caret-down');

    expect(descendantIcon).toBeTruthy();
  });

  it('Test TableHeads with default sort', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            {
              value: 'id',
              label: 'id',
              sortable: true,
              onSort: handleSort(),
              defaultSort: 'asc',
            },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );

    const firstHeadCase = wrapper.find('th').at(0);

    const ascendantIcon = firstHeadCase.find('svg').hasClass('fa-caret-up');

    expect(ascendantIcon).toBeTruthy();
  });

  it('Test TableHeads sort click event', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableHeads
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['asc']}
        noSort
        onHeaderCellsClick={onHeaderCellsClick}
      />
    );

    const firstHeadCase = wrapper.find('th').at(0);

    firstHeadCase.simulate('click');

    expect(onHeaderCellsClick).toHaveBeenCalled();
  });
});
