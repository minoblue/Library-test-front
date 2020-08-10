import axios from "axios";
import config from "../config";

function baseurl(endpoint) {
  const local = 'http://localhost:3009/';
  const remote = '';

  return `${local}${endpoint}`;
}

function getToken() {
    const token = localStorage.getItem("token");
    return `Bearer ${token}`;
}

// let api = null;
//
// function getInitializedApi() {
//   if (api) return api; // return initialized api if already initialized.
//   return (api = axios.create({
//     baseURL: config.apiHost,
//     responseType: "json",
//   }));
// }
//
// export function get(url) {
//   return getInitializedApi().get(url);
// }
//
// export function post(url, data) {
//   return getInitializedApi().post(url, data);
// }

export const loginUserService = (request) => {
  const LOGIN_ENDPOINT = baseurl('login');

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };

  return fetch(LOGIN_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      }).catch(error => {
        return error;
      });
};

export const getBooksService = (request) => {
  const BOOKS_ENDPOINT = baseurl('books');

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
    body: JSON.stringify(request)
  };

  return fetch(BOOKS_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      }).catch(error => {
        return error;
      });
};

