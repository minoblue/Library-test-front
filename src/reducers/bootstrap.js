import { BOOTSTRAP_OK, BOOTSTRAP_NOT_OK } from "../action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case BOOTSTRAP_OK:
      return {
        ...state,
        ...action.payload,
      };
    case BOOTSTRAP_NOT_OK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
