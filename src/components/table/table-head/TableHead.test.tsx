import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { fakeTableConfig } from '../../../__fake__/fakeData';

import TableHead from './TableHead';

describe('Test TableHeads', () => {
  const handleSort = jest.fn();
  const onHeaderCellsClick = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableHeads', () => {
    render(<TableHead config={fakeTableConfig} sortOrders={[]} noSort />);

    expect(screen).toBeDefined();
  });

  it('Test TableHeads with text align to left', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', align: 'left' },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );

    const firstHeadCase = screen
      .getAllByRole('columnheader')[0]
      .classList.contains('has-text-left');

    expect(firstHeadCase).toBeTruthy();
  });

  it('Test TableHeads, column head has no label', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [{ value: 'id' }, ...fakeTableConfig.columns.slice(1)],
        }}
        sortOrders={[]}
        noSort
      />
    );
    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    expect(firstHeadCase.textContent).toEqual('');
  });

  it('Test TableHeads, column head render a node', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: () => <span>Column Head</span> },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );
    const firstHeadCase = screen.getAllByRole('columnheader')[0].children[0];

    expect(firstHeadCase.textContent).toEqual('Column Head');
  });

  it('Test TableHeads with sort ascendant', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['asc']}
        noSort
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    const ascendantIcon = firstHeadCase.querySelector('span');

    expect(ascendantIcon?.textContent).toEqual('⏶');
  });

  it('Test TableHeads with sort descendant', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['desc']}
        noSort
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    const descendantIcon = firstHeadCase.querySelector('span');

    expect(descendantIcon?.textContent).toEqual('⏷');
  });

  it('Test TableHeads with default sort', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            {
              value: 'id',
              label: 'id',
              sortable: true,
              onSort: handleSort(),
              defaultSort: 'asc',
            },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={[]}
        noSort
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    const ascendantIcon = firstHeadCase.querySelector('span');

    expect(ascendantIcon?.textContent).toEqual('⏶');
  });

  it('Test TableHeads with sort ascendant and custom icon', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
          ascendantSortIcon: <FontAwesomeIcon icon={faCaretUp} />,
          descendantSortIcon: <FontAwesomeIcon icon={faCaretDown} />,
        }}
        sortOrders={['asc']}
        noSort
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    const ascendantIcon = firstHeadCase.querySelector('svg')?.classList.contains('fa-caret-up');

    expect(ascendantIcon).toBeTruthy();
  });

  it('Test TableHeads with sort descendant and custom icon', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
          ascendantSortIcon: <FontAwesomeIcon icon={faCaretUp} />,
          descendantSortIcon: <FontAwesomeIcon icon={faCaretDown} />,
        }}
        sortOrders={['desc']}
        noSort
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    const descendantIcon = firstHeadCase.querySelector('svg')?.classList.contains('fa-caret-down');

    expect(descendantIcon).toBeTruthy();
  });

  it('Test TableHeads sort click event', () => {
    render(
      <TableHead
        config={{
          ...fakeTableConfig,
          columns: [
            { value: 'id', label: 'id', sortable: true, onSort: handleSort() },
            ...fakeTableConfig.columns.slice(1),
          ],
        }}
        sortOrders={['asc']}
        noSort
        onHeaderCellsClick={onHeaderCellsClick}
      />
    );

    const firstHeadCase = screen.getAllByRole('columnheader')[0];

    fireEvent.click(firstHeadCase);

    expect(onHeaderCellsClick).toHaveBeenCalledTimes(1);
  });
});
