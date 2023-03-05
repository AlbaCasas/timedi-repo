export interface Repository {
  id: string;
  owner: { avatar_url: string; login: string };
  name: string;
  description: string;
  updated_at: string;
  created_at: string;
  topic: string[];
  language: string;
  stargazers_count: number;
}

export interface RepositoriesResult {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}
