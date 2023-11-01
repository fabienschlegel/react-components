import React from 'react';

import clsx from 'clsx';

import useSortableData from './hook/useSortableData';

import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';

import { TableConfig } from '../../types';

export interface TableProps<T> {
  config: TableConfig<T>;
  data: T[];
  className?: string;
}

function Table<T>({ config, data, className }: TableProps<T>): JSX.Element {
  const [sorts, noSort, handleSort] = useSortableData<T>(config);
  const { isBordered, isStriped, isNarrow, isHoverable, isFullWidth, hasTableFooter } = config;
  return (
    <table
      className={clsx(
        'table',
        className,
        isBordered && 'is-bordered',
        isStriped && 'is-striped',
        isNarrow && 'is-narrow',
        isHoverable && 'is-hoverable',
        isFullWidth && 'is-fullwidth'
      )}
      aria-label="table"
    >
      <TableHead
        config={config}
        onHeaderCellsClick={handleSort}
        sortOrders={sorts}
        noSort={noSort}
      />
      {hasTableFooter && (
        <TableHead
          config={config}
          onHeaderCellsClick={handleSort}
          sortOrders={sorts}
          noSort={noSort}
          isTableFooter
        />
      )}
      <TableBody<T> config={config} data={data} />
    </table>
  );
}

export default Table;
