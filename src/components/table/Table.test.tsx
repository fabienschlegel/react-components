import React from 'react';

import { render, screen } from '@testing-library/react';

import { fakeTableData, fakeTableConfig } from '../../__fake__/fakeData';

import Table from './Table';

describe('Test Table', () => {
  it('Mount the component', () => {
    render(<Table data={fakeTableData} config={fakeTableConfig} />);

    expect(screen).toBeDefined();
  });

  it('is bordered', () => {
    render(<Table data={fakeTableData} config={{ ...fakeTableConfig, isBordered: true }} />);

    const table = screen.getByRole('table').classList.contains('is-bordered');

    expect(table).toBeTruthy();
  });

  it('is striped', () => {
    render(<Table data={fakeTableData} config={{ ...fakeTableConfig, isStriped: true }} />);

    const table = screen.getByRole('table').classList.contains('is-striped');

    expect(table).toBeTruthy();
  });

  it('is narrow', () => {
    render(<Table data={fakeTableData} config={{ ...fakeTableConfig, isNarrow: true }} />);

    const table = screen.getByRole('table').classList.contains('is-narrow');

    expect(table).toBeTruthy();
  });

  it('is hoverable', () => {
    render(<Table data={fakeTableData} config={{ ...fakeTableConfig, isHoverable: true }} />);

    const table = screen.getByRole('table').classList.contains('is-hoverable');

    expect(table).toBeTruthy();
  });

  it('is fullwidth', () => {
    render(<Table data={fakeTableData} config={{ ...fakeTableConfig, isFullWidth: true }} />);

    const table = screen.getByRole('table').classList.contains('is-fullwidth');

    expect(table).toBeTruthy();
  });

  it('has footer', () => {
    const { container } = render(
      <Table data={fakeTableData} config={{ ...fakeTableConfig, hasTableFooter: true }} />
    );

    const tableFooter = container.getElementsByTagName('tfoot');

    expect(tableFooter.length).toBeGreaterThan(0);
  });
});
