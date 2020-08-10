import { LOGIN_OK, LOGIN_NOT_OK } from "../action-types";

export default (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN_OK:
    case LOGIN_NOT_OK:
      console.log('action.payload', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
