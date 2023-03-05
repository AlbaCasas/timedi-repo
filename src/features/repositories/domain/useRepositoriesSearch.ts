"use client";

import React from "react";
import { useSearchQuery } from "../services/useSearchQuery";

const useSearch = ({ currentPage, resetPagination }: { currentPage?: number; resetPagination: () => void }) => {
  const [query, setQuery] = React.useState("");
  const { results, isFetching, isError } = useSearchQuery(query, currentPage || 1);

  const onSearch = (value?: string) => {
    if (value === undefined) return;
    resetPagination();
    setQuery(value);
  };

  return { onSearch, results, isFetching, isError };
};

export default useSearch;
