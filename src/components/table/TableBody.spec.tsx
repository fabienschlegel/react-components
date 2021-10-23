/* eslint-disable no-undef */
import React from 'react';

import { mount, ReactWrapper } from 'enzyme';

import { fakeTableData, fakeTableConfig } from '../../__fake__/fakeData';

import { FakeDataType } from '../../__fake__/types';

import TableBody from './TableBody';

describe('Test TableBody', () => {
  const handleClickOnRow = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableBody', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableBody data={fakeTableData} config={fakeTableConfig} />
    );
    expect(wrapper.length).toEqual(1);
  });

  it('Test TableBody row click event', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableBody data={fakeTableData} config={{ ...fakeTableConfig, handleClickOnRow }} />
    );
    const rows = wrapper.find('tr');

    rows.at(0).simulate('click');

    expect(handleClickOnRow).toHaveBeenCalled();
  });

  it('Test TableBody row click without event', () => {
    const wrapper: ReactWrapper<FakeDataType> = mount(
      <TableBody data={fakeTableData} config={{ ...fakeTableConfig }} />
    );
    const rows = wrapper.find('tr');

    rows.at(0).simulate('click');

    expect(handleClickOnRow).not.toHaveBeenCalled();
  });
});
