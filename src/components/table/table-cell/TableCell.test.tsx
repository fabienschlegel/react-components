import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { fakeTableData, fakeColumnConfig } from '../../../__fake__/fakeData';

import TableCells from './TableCell';

describe('Test TableCells', () => {
  const handleClick = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableCells', () => {
    render(
      <TableCells
        data={fakeTableData}
        column={fakeColumnConfig}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    expect(screen).toBeDefined();
  });

  it('Test TableCells with text align to left', () => {
    render(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, align: 'left' }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = screen.getByRole('cell').classList.contains('has-text-left');

    expect(tableCell).toBeTruthy();
  });

  it('Test TableCells with tooltip', () => {
    render(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, tooltip: 'tooltip' }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = screen.getByRole('cell').classList.contains('has-tooltip-arrow');

    expect(tableCell).toBeTruthy();
  });

  it('Test TableCells click event', () => {
    render(
      <TableCells
        data={fakeTableData}
        column={{ ...fakeColumnConfig, onClick: handleClick }}
        rowIndex={0}
        colIndex={0}
        rowData={fakeTableData[0]}
      />
    );

    const tableCell = screen.getByRole('cell');

    fireEvent.click(tableCell);

    expect(handleClick).toHaveBeenCalled();
  });
});
