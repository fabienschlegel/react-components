import React from 'react';

import { fakeColumnConfig, fakeTableData } from '../../../__fake__/fakeData';

import renderValue from './renderValue';

describe('Test renderValue', () => {
  const rowIndex = 0;
  const rowData = fakeTableData[0];
  const valueFunction = () => <span>ID</span>;

  it('Test render value as string', () => {
    const result = renderValue(fakeColumnConfig, fakeTableData, rowIndex, rowData);

    expect(typeof result).toBe('string');
  });

  it('Test render value as null', () => {
    const result = renderValue({}, fakeTableData, rowIndex, rowData);

    expect(result).toBe(null);
  });

  it('Test render value as node', () => {
    const result = renderValue(
      { ...fakeColumnConfig, value: valueFunction },
      fakeTableData,
      rowIndex,
      rowData
    );

    expect(result && result.valueOf()).toStrictEqual(<span>ID</span>);
  });
});
