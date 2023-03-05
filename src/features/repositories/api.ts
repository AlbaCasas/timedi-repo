import { get } from "@core/api/client";

export const getRepositories = async (q: string) =>
  get("/search/repositories", {
    q,
    per_page: "5",
  });
