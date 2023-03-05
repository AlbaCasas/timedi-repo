import React from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const onPageChange = React.useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const resetPagination = React.useCallback(() => {
    setCurrentPage(1);
  }, []);

  return { currentPage, resetPagination, onPageChange };
};

export default usePagination;
