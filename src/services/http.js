import { Auth } from "./";

export const post = (url, data) => {
  const Headers = {
    "content-type": "application/json"
  };

  if (Auth.isAuthenticated) {
    Headers.Authorization = `Bearer ${Auth.token}`;
  }

  return fetch(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    headers: Headers,
    method: "POST"
  }).then(response => response.json());
};

export const get = url => {
  return fetch(url).then(response => response.json());
};
