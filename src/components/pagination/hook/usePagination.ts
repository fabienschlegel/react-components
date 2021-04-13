import { useEffect, useRef, useState } from 'react';

const getPages = (
  currentPage: number,
  lastPage: number,
  pagesToShow: number
): number[] => {
  const pages = [];
  let startFromNumber = currentPage - Math.floor(pagesToShow / 2);
  if (lastPage <= pagesToShow) {
    startFromNumber = 1;
    // eslint-disable-next-line no-param-reassign
    pagesToShow = lastPage;
  } else if (currentPage <= Math.ceil(pagesToShow / 2)) {
    startFromNumber = 1;
  } else if (currentPage + Math.floor((pagesToShow - 1) / 2) >= lastPage) {
    startFromNumber = lastPage - (pagesToShow - 1);
  }

  for (let i = 1; i <= pagesToShow; i += 1) {
    pages.push(startFromNumber);
    startFromNumber += 1;
  }

  return pages;
};

const usePagination = (
  currentPage: number,
  lastPage: number,
  pagesToShow: number
): [number[], boolean, boolean, boolean, boolean] => {
  const [pages, setPages] = useState<number[]>([]);
  const [displayFirstPage, setDisplayFirstPage] = useState(false);
  const [displayLastPage, setDisplayLastPage] = useState(false);
  const [leftEllipsis, setLeftEllipsis] = useState(false);
  const [rightEllipsis, setRightEllipsis] = useState(false);
  const pagesToShowRef = useRef(pagesToShow);

  useEffect(() => {
    setPages(getPages(currentPage, lastPage, pagesToShowRef.current));
  }, [currentPage, lastPage, pagesToShowRef, setPages]);

  useEffect(() => {
    setDisplayFirstPage(pages.length >= pagesToShowRef.current && pages[0] > 1);

    setLeftEllipsis(pages[0] > 2);

    setRightEllipsis(pages[pages.length - 1] < lastPage - 1);

    setDisplayLastPage(pages[pages.length - 1] < lastPage);
  }, [
    pages,
    currentPage,
    lastPage,
    pagesToShowRef,
    setDisplayFirstPage,
    setLeftEllipsis,
    setRightEllipsis,
    setDisplayLastPage,
  ]);

  return [pages, leftEllipsis, rightEllipsis, displayFirstPage, displayLastPage];
};

export default usePagination;
