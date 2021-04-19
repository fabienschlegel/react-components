import React from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../button/Button';

import { Alignment, Size } from './types';
import usePagination from './hook/usePagination';

export interface PaginationProps {
  currentPage: number;
  lastPage: number;
  changePage: (page: number) => void;
  pagesToShow?: number;
  alignment?: Alignment;
  size?: Size;
  isRounded?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  changePage,
  pagesToShow = 5,
  alignment,
  size,
  isRounded,
}) => {
  const [
    pages,
    leftEllipsis,
    rightEllipsis,
    displayFirstPage,
    displayLastPage,
  ] = usePagination(currentPage, lastPage, pagesToShow);

  const ellipsis = (
    <li>
      <span className="pagination-ellipsis">&hellip;</span>
    </li>
  );

  return (
    <nav
      className={clsx(
        'pagination',
        alignment,
        size,
        isRounded ? 'is-rounded' : undefined
      )}
      role="navigation"
      aria-label="pagination"
    >
      <Button
        className="pagination-previous"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>

      <Button
        className="pagination-next"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage >= lastPage}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
      <ul className="pagination-list">
        {displayFirstPage ? (
          <li id="first-page">
            <Button
              onClick={() => changePage(1)}
              className="pagination-link"
              aria-label="Goto page 1"
            >
              1
            </Button>
          </li>
        ) : null}
        {leftEllipsis ? ellipsis : null}
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
        {rightEllipsis ? ellipsis : null}
        {displayLastPage ? (
          <li id="last-page">
            <Button
              onClick={() => changePage(lastPage)}
              className="pagination-link"
              aria-label={`Goto page ${lastPage}`}
            >
              {lastPage}
            </Button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default React.memo(Pagination);
