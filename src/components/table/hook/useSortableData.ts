import { useEffect, useState } from 'react';
import { TableConfig, SortOrders, ColumnConfig, SortOrder } from '../../../types';

export default function useSortableData<T>(
  config: TableConfig<T>
): [SortOrders, boolean, (column: ColumnConfig<T>, index: number) => void] {
  const [sorts, setSorts] = useState<SortOrders>(config.columns.map(() => undefined));

  const [sortByDefault, setSortByDefault] = useState(false);

  const handleSort = (column: ColumnConfig<T>, index: number) => {
    if (column.sortable && column.onSort) {
      let newSort: SortOrder;
      if (column.defaultSort && !sorts[index]) {
        newSort = column.defaultSort === 'asc' ? 'desc' : 'asc';
      } else {
        newSort = sorts[index] === 'asc' ? 'desc' : 'asc';
      }

      const newSorts: SortOrders = config.columns.map(() => undefined);

      newSorts[index] = newSort;

      setSorts(newSorts);

      column.onSort(newSort);
    }
  };

  useEffect(() => {
    const noSort = sorts.every((sortValue) => sortValue === undefined);

    if (noSort) {
      setSortByDefault(true);
    } else {
      setSortByDefault(false);
    }
  }, [sorts]);

  return [sorts, sortByDefault, handleSort];
}
