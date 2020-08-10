import { combineReducers } from "redux";

import bootstrap from "./bootstrap";
import auth from "./auth";

export default combineReducers({
  bootstrap: bootstrap,
  auth: auth,
});
