import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getRepositories } from "../api";
import type { RepositoriesResult } from "../types";

export const useSearchQuery = (query: string, page: number) => {
  const [isQueryEnabled, setIsQueryEnabled] = React.useState(false);

  const {
    data: results,
    isFetching,
    isError,
  } = useQuery<RepositoriesResult>(["repositories", { query, page }], () => getRepositories(query, page), {
    keepPreviousData: false,
    enabled: isQueryEnabled,
  });

  React.useEffect(() => {
    if (query && !isQueryEnabled) {
      setIsQueryEnabled(true);
    }
  }, [query, isQueryEnabled]);

  return { results, isFetching, isError };
};
