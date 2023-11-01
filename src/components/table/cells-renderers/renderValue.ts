import { ReactNode } from 'react';

import { isFunction } from '../../../utils/utils';

import { ColumnConfig } from '../../../types';

export default function renderValue<T>(
  column: ColumnConfig<T>,
  data: T[],
  rowIndex: number,
  rowData: T
): ReactNode | null {
  if (!column.value) {
    return null;
  }
  if (isFunction(column.value)) {
    return column.value(data, rowData, rowIndex);
  }
  return rowData[column.value] as ReactNode;
}
