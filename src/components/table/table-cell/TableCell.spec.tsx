/* eslint-disable no-undef */
import React from 'react';

import { mount, ReactWrapper } from 'enzyme';

import { fakeTableData, fakeColumnConfig } from '../../../__fake__/fakeData';

import { FakeDataType } from '../../../__fake__/types';

import TableCells from './TableCell';

describe('Test TableCells', () => {
  const handleClick = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableCells', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableCells
        data={fakeTableData}
        column={fakeColumnConfig}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Test TableCells with text align to left', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, align: 'left' }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = wrapper.find('td').hasClass('has-text-left');
    expect(tableCell).toBeTruthy();
  });

  it('Test TableCells with tooltip', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, tooltip: 'tooltip' }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = wrapper.find('td').hasClass('has-tooltip-arrow');
    expect(tableCell).toBeTruthy();
  });

  it('Test TableCells click event', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, onClick: handleClick }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = wrapper.find('td');

    tableCell.simulate('click');

    expect(handleClick).toHaveBeenCalled();
  });

  it('Test TableCells keypress event', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, onClick: handleClick }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = wrapper.find('td');

    tableCell.simulate('keypress', { key: 'Enter' });

    expect(handleClick).toHaveBeenCalled();
  });
});
