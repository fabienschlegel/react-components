import React from 'react';

import clsx from 'clsx';

import useSortableData from './hook/useSortableData';

import TableHeads from './TableHeads';
import TableBody from './TableBody';

import { TableConfig } from '../../types';

export interface TableProps<T> {
  config: TableConfig<T>;
  data: T[];
  className?: string;
}

const Table = <T extends unknown>({ config, data, className }: TableProps<T>): JSX.Element => {
  const [sorts, noSort, handleSort] = useSortableData<T>(config);

  return (
    <table
      className={clsx(
        'table',
        className,
        config.isBordered && 'is-bordered',
        config.isStriped && 'is-striped',
        config.isNarrow && 'is-narrow',
        config.isHoverable && 'is-hoverable',
        config.isFullWidth && 'is-fullwidth'
      )}
      aria-label="table"
    >
      <TableHeads
        config={config}
        onHeaderCellsClick={handleSort}
        sortOrders={sorts}
        noSort={noSort}
      />
      {config.hasTableFooter && (
        <TableHeads
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
};

export default Table;
