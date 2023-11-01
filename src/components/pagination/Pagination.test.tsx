import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Pagination from './Pagination';

describe('Test Pagination', () => {
  const changePage = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Mount the component', () => {
    render(<Pagination currentPage={1} lastPage={10} changePage={changePage} />);

    expect(screen).toBeDefined();
  });

  it('with seven pages to show', () => {
    render(<Pagination currentPage={1} lastPage={10} changePage={changePage} pagesToShow={7} />);

    expect(screen).toBeDefined();
  });

  it('is centered', () => {
    render(
      <Pagination currentPage={1} lastPage={10} changePage={changePage} alignment="is-centered" />
    );

    expect(screen).toBeDefined();
  });

  it('is small', () => {
    render(<Pagination currentPage={1} lastPage={10} changePage={changePage} size="is-small" />);

    expect(screen).toBeDefined();
  });

  it('is rounded', () => {
    render(<Pagination currentPage={1} lastPage={10} changePage={changePage} isRounded />);

    expect(screen).toBeDefined();
  });

  it('with ellipsis', () => {
    render(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    expect(screen).toBeDefined();
  });

  it('change page event', () => {
    render(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    const firstPage = screen.getByText('1');

    fireEvent.click(firstPage);

    expect(changePage).toHaveBeenCalledTimes(1);
  });

  it('change page event', () => {
    render(<Pagination currentPage={9} lastPage={20} changePage={changePage} />);

    const lastPage = screen.getByText('20');

    fireEvent.click(lastPage);

    expect(changePage).toHaveBeenCalledTimes(1);
  });

  it('change page event', () => {
    const currentPage = 9;

    render(<Pagination currentPage={currentPage} lastPage={20} changePage={changePage} />);

    const previousPage = screen.getByText('⏴');

    fireEvent.click(previousPage);

    const nextPage = screen.getByText('⏵');

    fireEvent.click(nextPage);

    const page = screen.getByLabelText(`Page ${currentPage}`);

    fireEvent.click(page);

    expect(changePage).toHaveBeenCalledTimes(3);
  });
});
