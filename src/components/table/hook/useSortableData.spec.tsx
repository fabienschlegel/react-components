/* eslint-disable no-undef */

import { act, renderHook } from '@testing-library/react-hooks';

import { fakeTableConfig } from '../../../__fake__/fakeData';

import useSortableData from './useSortableData';

import { FakeDataType } from '../../../__fake__/types';
import { ColumnConfig, TableConfig } from '../../../types';

describe('Test useSortableData hook', () => {
  const sortableColumnsConfig = fakeTableConfig.columns.map((column) => ({
    ...column,
    sortable: true,
    onSort: jest.fn(),
  }));

  const sortableFakeConfig = { ...fakeTableConfig, columns: sortableColumnsConfig };

  const setUp = (config: TableConfig<FakeDataType>) => renderHook(() => useSortableData(config));

  it('ascendent sort on first column ', () => {
    const { result } = setUp(sortableFakeConfig);

    const handleSort = result.current[2];

    act(() => {
      handleSort(sortableFakeConfig.columns[0], 0);
    });

    expect(result.current[0]).toStrictEqual(['asc', undefined, undefined, undefined]);
  });

  it('descendent sort on first column ', () => {
    const { result } = setUp(sortableFakeConfig);

    const handleSort = result.current[2];

    act(() => {
      handleSort(sortableFakeConfig.columns[0], 0);
    });

    const handleSortAfterUpdate = result.current[2];

    act(() => {
      handleSortAfterUpdate(sortableFakeConfig.columns[0], 0);
    });

    expect(result.current[0]).toStrictEqual(['desc', undefined, undefined, undefined]);
  });

  it('ascendent default sort on first column ', () => {
    const defaultSortColumn: ColumnConfig<FakeDataType> = {
      ...sortableFakeConfig.columns[0],
      defaultSort: 'asc',
    };

    const { result } = setUp({
      ...sortableFakeConfig,
      columns: [defaultSortColumn, ...sortableFakeConfig.columns.slice(1)],
    });

    const handleSort = result.current[2];

    act(() => {
      handleSort(defaultSortColumn, 0);
    });

    expect(result.current[0]).toStrictEqual(['desc', undefined, undefined, undefined]);
  });

  it('descendent default sort on first column ', () => {
    const defaultSortColumn: ColumnConfig<FakeDataType> = {
      ...sortableFakeConfig.columns[0],
      defaultSort: 'desc',
    };

    const { result } = setUp({
      ...sortableFakeConfig,
      columns: [defaultSortColumn, ...sortableFakeConfig.columns.slice(1)],
    });

    const handleSort = result.current[2];

    act(() => {
      handleSort(defaultSortColumn, 0);
    });

    expect(result.current[0]).toStrictEqual(['asc', undefined, undefined, undefined]);
  });

  it('not sortable column do nothing', () => {
    const { result } = setUp(fakeTableConfig);

    const handleSort = result.current[2];

    act(() => {
      handleSort(fakeTableConfig.columns[0], 0);
    });

    expect(result.current[0]).toStrictEqual([undefined, undefined, undefined, undefined]);
  });

  it('no onSort method do nothing', () => {
    const { result } = setUp(fakeTableConfig);

    const handleSort = result.current[2];

    act(() => {
      handleSort({ ...fakeTableConfig.columns[0], sortable: true }, 0);
    });

    expect(result.current[0]).toStrictEqual([undefined, undefined, undefined, undefined]);
  });
});
