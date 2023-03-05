import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../api";

import type { RepositoriesResult } from "../types";

export const useSearchQuery = (query: string) => {
  const {
    data: results,
    refetch,
    isFetching,
  } = useQuery<RepositoriesResult>(["repositories"], () => getRepositories(query), {
    enabled: false,
  });

  React.useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  return { results, isFetching };
};
