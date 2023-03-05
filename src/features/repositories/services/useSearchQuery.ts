import React from "react";
import { useQuery } from "react-query";
import { getRepositories } from "../api";

import type { RepositoriesResult } from "../types";

export const useSearchQuery = (query: string) => {
  const { data: results, refetch } = useQuery<RepositoriesResult>(["repositories"], () => getRepositories(query), {
    enabled: false,
  });

  React.useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  return { results };
};
