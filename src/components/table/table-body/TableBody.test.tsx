import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { fakeTableData, fakeTableConfig } from '../../../__fake__/fakeData';

import TableBody from './TableBody';

describe('Test TableBody', () => {
  const handleClickOnRow = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Mount TableBody', () => {
    render(<TableBody data={fakeTableData} config={fakeTableConfig} />);

    expect(screen).toBeDefined();
  });

  it('Test TableBody row click event', () => {
    render(<TableBody data={fakeTableData} config={{ ...fakeTableConfig, handleClickOnRow }} />);

    const rows = screen.getAllByRole('row');

    fireEvent.click(rows[0]);

    expect(handleClickOnRow).toHaveBeenCalledTimes(1);
  });

  it('Test TableBody row click without event', () => {
    render(<TableBody data={fakeTableData} config={{ ...fakeTableConfig }} />);

    const rows = screen.getAllByRole('row');

    fireEvent.click(rows[0]);

    expect(handleClickOnRow).not.toHaveBeenCalled();
  });
});
