import { LOGIN, GET_BOOKS } from "../action-types";

export const requestLogin = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const requestGetBooks = () => ({
  type: GET_BOOKS,
});
