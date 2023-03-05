const API_URL = "https://api.github.com";

type Path = string;
type Body = BodyInit;
type Params = { [key: string]: string };
type Method = "GET" | "POST" | "PUT" | "DELETE";

const client = async (path: Path, method: Method, { body, params }: { body?: Body; params?: Params }) => {
  let url = `${API_URL}${path}`;
  if (params) {
    const urlParams = new URLSearchParams(params).toString();
    url = `${url}?${urlParams}`;
  }
  const options = {
    method,
    body,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  };

  console.log("token", process.env.NEXT_PUBLIC_GITHUB_TOKEN);

  const res = await fetch(url, options);
  if (res.status !== 200) {
    const error = await res.json();
    throw { ...error, status: res.status };
  }
  return res.json();
};

export const get = async (path: Path, params?: Params) => {
  return client(path, "GET", { params });
};

export const post = async (path: Path, body?: Body, params?: Params) => {
  return client(path, "POST", { body, params });
};

export const put = async (path: Path, body?: Body, params?: Params) => {
  return client(path, "PUT", { body, params });
};

export const remove = async (path: Path, params?: Params) => {
  return client(path, "DELETE", { params });
};
