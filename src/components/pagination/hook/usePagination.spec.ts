import { renderHook } from '@testing-library/react-hooks';

import '../../../setupTests';

import usePagination from './usePagination';

describe('Test usePagination hook', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const setUp = (currentPage: number, lastPage: number, pagesToShow: number) =>
    renderHook(() => usePagination(currentPage, lastPage, pagesToShow));

  it('usePagination', () => {
    const { result } = setUp(1, 1, 5);

    expect(result.current[0]).toStrictEqual([1]);
    expect(result.current[1]).toBeFalsy();
  });

  it('usePagination with current page is near last page', () => {
    const { result } = setUp(14, 15, 5);

    expect(result.current[0]).toStrictEqual([11, 12, 13, 14, 15]);
    expect(result.current[1]).toBeTruthy();
  });
});
