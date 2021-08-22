import React from 'react';

import clsx from 'clsx';

import { generateRandomId } from '../../utils/utils';

import TableCells from './TableCells';

import { TableConfig } from '../../types';

interface TableBodyProps<T> {
  config: TableConfig<T>;
  data: T[];
}

export default function TableBody<T>({ config, data: allData }: TableBodyProps<T>): JSX.Element {
  const getOrderedColumns = (orderedColumnsConfig: TableConfig<T>) => orderedColumnsConfig.columns; // later ordering columns will be enabled
  const renderRow = (renderRowConfig: TableConfig<T>, data: T[], rowIndex: number, rowData: T) => {
    const { handleClickOnRow } = renderRowConfig;
    const onClick = () => {
      if (handleClickOnRow) handleClickOnRow(rowData);
    };

    return (
      <tr
        key={rowIndex}
        onClick={onClick}
        className={clsx(handleClickOnRow ? 'pointer' : undefined)}
      >
        {getOrderedColumns(renderRowConfig).map((columnConfig, colIndex) => (
          <TableCells
            key={generateRandomId()}
            column={columnConfig}
            data={data}
            rowIndex={rowIndex}
            colIndex={colIndex}
            rowData={rowData}
          />
        ))}
      </tr>
    );
  };

  return (
    <tbody>
      {allData.map((rowData, rowIndex) => renderRow(config, allData, rowIndex, rowData))}
    </tbody>
  );
}
