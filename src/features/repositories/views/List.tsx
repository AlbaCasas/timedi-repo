"use client";

import Column from "@components/Column";
import Row from "@components/Row";
import React from "react";
import Pagination from "../components/Pagination";
import Results from "../components/Results/Results";
import Search from "../components/Search";
import usePagination from "../domain/usePagination";
import useRepositoriesSearch from "../domain/useRepositoriesSearch";

const List = () => {
  const { currentPage, onPageChange, resetPagination } = usePagination();
  const { onSearch, results, isFetching, isError } = useRepositoriesSearch({ currentPage, resetPagination });
  console.log({ isError });

  return (
    <Column className="gap-3">
      <Column className="md:w-1/2">
        <Search onSearch={onSearch} />
      </Column>
      <Results items={results?.items} isFetching={isFetching} isError={isError} />
      <Row className="mt-1 ml-auto">
        <Pagination currentPage={currentPage} onPageChange={onPageChange} numResults={results?.total_count} />
      </Row>
    </Column>
  );
};

export default List;
