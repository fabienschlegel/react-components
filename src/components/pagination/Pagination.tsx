import React, { FunctionComponent, ReactNode } from 'react';

import clsx from 'clsx';

import Button from '../button/Button';

import { Alignment, Sizes } from '../../types';
import usePagination from './hook/usePagination';

export interface IPaginationProps {
  currentPage: number;
  lastPage: number;
  previousPageIcon?: ReactNode;
  nextPageIcon?: ReactNode;
  changePage: (page: number) => void;
  pagesToShow?: number;
  alignment?: Alignment;
  size?: Omit<Sizes, 'is-normal'>;
  isRounded?: boolean;
}

const Pagination: FunctionComponent<IPaginationProps> = ({
  currentPage,
  lastPage,
  previousPageIcon,
  nextPageIcon,
  changePage,
  pagesToShow = 5,
  alignment,
  size,
  isRounded,
}) => {
  const [pages, leftEllipsis, rightEllipsis, displayFirstPage, displayLastPage] = usePagination(
    currentPage,
    lastPage,
    pagesToShow
  );

  const ellipsis = (
    <li>
      <span className="pagination-ellipsis">&hellip;</span>
    </li>
  );

  return (
    <nav
      className={clsx('pagination', alignment, size, isRounded ? 'is-rounded' : undefined)}
      role="navigation"
      aria-label="pagination"
    >
      <Button
        className="pagination-previous"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        {previousPageIcon || <>&#x23F4;</>}
      </Button>

      <Button
        className="pagination-next"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= lastPage}
      >
        {nextPageIcon || <>&#x23F5;</>}
      </Button>
      <ul className="pagination-list">
        {displayFirstPage && (
          <li id="first-page">
            <Button
              onClick={() => changePage(1)}
              className="pagination-link"
              aria-label="Goto page 1"
            >
              1
            </Button>
          </li>
        )}
        {leftEllipsis && ellipsis}
        {pages.map((page) => {
          const isCurrent = page === currentPage ? 'is-current' : null;
          return (
            <li key={page}>
              <Button
                className={clsx('pagination-link', isCurrent)}
                id={`page${page}`}
                aria-label={`Page ${page}`}
                onClick={() => changePage(page)}
              >
                {page}
              </Button>
            </li>
          );
        })}
        {rightEllipsis && ellipsis}
        {displayLastPage && (
          <li id="last-page">
            <Button
              onClick={() => changePage(lastPage)}
              className="pagination-link"
              aria-label={`Goto page ${lastPage}`}
            >
              {lastPage}
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
