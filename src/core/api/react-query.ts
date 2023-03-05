import { QueryClient } from "react-query";

const FIVE_MINUTES = 1000 * 60 * 5;
const config = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: FIVE_MINUTES, // the cache lasts 5 minutes
    },
  },
};

export const client = new QueryClient(config);
