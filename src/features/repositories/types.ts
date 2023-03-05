export interface Repository {
  id: string;
  owner: { avatar_url: string; login: string };
  name: string;
  description: string;
  updated_at: string;
  created_at: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  html_url: string;
}

export interface RepositoriesResult {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}
