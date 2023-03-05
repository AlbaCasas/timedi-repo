import PaginationComponent from "@components/Pagination";
import React from "react";
import { MAX_PAGES_LIMIT, RESULTS_PER_PAGE } from "../constants";

const Pagination = ({
  currentPage,
  onPageChange,
  numResults,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  numResults?: number;
}) => {
  const numPages = numResults ? Math.floor(numResults / RESULTS_PER_PAGE) : 0;

  return numPages > 1 ? (
    <PaginationComponent
      currentPage={currentPage}
      onPageChange={onPageChange}
      numPages={Math.min(numPages, MAX_PAGES_LIMIT)}
    />
  ) : null;
};

export default Pagination;
