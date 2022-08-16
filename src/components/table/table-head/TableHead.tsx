import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { isFunction } from '../../../utils/utils';

import { TableConfig, SortOrders, ColumnConfig, SortOrder } from '../../../types';

interface ITableHeaderProps<T> {
  config: TableConfig<T>;
  sortOrders: SortOrders;
  noSort: boolean;
  isTableFooter?: boolean;
  onHeaderCellsClick?: (column: ColumnConfig<T>, index: number) => void;
}

export default function TableHead<T>({
  config,
  sortOrders,
  noSort,
  isTableFooter,
  onHeaderCellsClick,
}: ITableHeaderProps<T>): JSX.Element {
  const renderHeaderValue = (column: ColumnConfig<T>): React.ReactNode => {
    if (!column.label) {
      return '';
    }
    if (isFunction(column.label)) {
      return (column.label as () => ReactNode)();
    }
    return column.label;
  };
  const handleHeaderCellsClick = (column: ColumnConfig<T>, index: number) =>
    onHeaderCellsClick && onHeaderCellsClick(column, index);

  const renderSortIcon = (sortOrder: SortOrder): JSX.Element => {
    const { ascendantSortIcon, descendantSortIcon } = config;
    if (sortOrder === 'asc') {
      return ascendantSortIcon ? <>{ascendantSortIcon}</> : <>&#x23F6;</>;
    }
    return descendantSortIcon ? <>{descendantSortIcon}</> : <>&#x23F7;</>;
  };

  const renderHeaderColumn = (column: ColumnConfig<T>, index: number) => {
    const sortOrder = sortOrders[index];
    let sortIcon;
    if (sortOrder !== undefined) {
      sortIcon = renderSortIcon(sortOrder);
    } else if (column.defaultSort && noSort) {
      sortIcon = renderSortIcon(column.defaultSort);
    }
    return (
      <th
        className={clsx(column.align ? `has-text-${column.align}` : null)}
        style={{ cursor: column.sortable ? 'pointer' : 'default' }}
        key={index}
        onClick={() => handleHeaderCellsClick(column, index)}
      >
        {renderHeaderValue(column)}
        {sortIcon && <span style={{ position: 'absolute', marginLeft: 5 }}>{sortIcon}</span>}
      </th>
    );
  };

  return isTableFooter ? (
    <tfoot>
      <tr>{config.columns.map(renderHeaderColumn)}</tr>
    </tfoot>
  ) : (
    <thead>
      <tr>{config.columns.map(renderHeaderColumn)}</tr>
    </thead>
  );
}
