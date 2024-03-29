import React from 'react';

import clsx from 'clsx';

import renderValue from '../cells-renderers/renderValue';

import { ColumnConfig } from '../../../types';

interface TableCellsProps<T> {
  column: ColumnConfig<T>;
  data: T[];
  rowIndex: number;
  colIndex: number;
  rowData: T;
}
export default function TableCells<T>({
  column,
  data,
  rowIndex,
  colIndex,
  rowData,
}: TableCellsProps<T>): JSX.Element {
  const result = (
    <td
      key={colIndex}
      data-row={rowIndex}
      data-col={colIndex}
      className={clsx(
        column.cellsClassName,
        column.align && `has-text-${column.align}`,
        column.tooltip && 'has-tooltip-arrow has-tooltip-left'
      )}
      onClick={() => column.onClick && column.onClick(rowData, column, colIndex, rowIndex)}
    >
      {renderValue(column, data, rowIndex, rowData)}
    </td>
  );

  return result;
}
