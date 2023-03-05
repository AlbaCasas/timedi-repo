"use client";

import React from "react";
import { useSearchQuery } from "../services/useSearchQuery";

const useRepositoriesSearch = () => {
  const [query, setQuery] = React.useState("");
  const { results } = useSearchQuery(query);

  const onSearch = (value?: string) => {
    if (value === undefined) return;
    setQuery(value);
  };

  return { onSearch, results };
};

export default useRepositoriesSearch;
