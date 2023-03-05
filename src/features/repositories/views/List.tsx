"use client";

import Column from "@components/Column";
import React from "react";
import Results from "../components/Results";
import Search from "../components/Search";
import useRepositoriesSearch from "../domain/useRepositoriesSearch";

const List = () => {
  const { onSearch, results } = useRepositoriesSearch();

  return (
    <Column className="gap-3">
      <Column className="w-1/2">
        <Search onSearch={onSearch} />
      </Column>
      <Results results={results} />
    </Column>
  );
};

export default List;
