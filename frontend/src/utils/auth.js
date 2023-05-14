import { checkResponse } from "./checkResponse";

export const BASE_URL = "https://api.tltelf.nomoredomains.monster";

function request(url, options) {
  return fetch(`${BASE_URL}${url}`, options).then(checkResponse);
}

export const register = (email, password) => {
  return request(`/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

export const authorize = (email, password) => {
  return request(`/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    localStorage.setItem("token", data.token);
    return data;
  });
};

export const checkToken = (token) => {
  return request(`/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((data) => data);
};
