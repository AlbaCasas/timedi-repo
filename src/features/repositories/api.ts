import { get } from "@core/api/client";

import { RESULTS_PER_PAGE } from "./constants";

export const getRepositories = async (q: string, page: number) =>
  get("/search/repositories", {
    q,
    per_page: `${RESULTS_PER_PAGE}`,
    page: `${page}`,
  });
