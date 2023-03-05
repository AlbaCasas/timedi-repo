"use client";

import Column from "@components/Column";
import React from "react";
import Results from "../components/Results/Results";
import Search from "../components/Search";
import useRepositoriesSearch from "../domain/useRepositoriesSearch";

const List = () => {
  const { onSearch, results, isFetching } = useRepositoriesSearch();

  return (
    <Column className="gap-3">
      <Column className="md:w-1/2">
        <Search onSearch={onSearch} />
      </Column>
      <Results results={results} isFetching={isFetching} />
    </Column>
  );
};

export default List;
