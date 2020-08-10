import { all } from "redux-saga/effects";

import { bootstrapSaga } from "./bootstrap";
import { loginSaga } from "./auth";

export default function* root() {
  yield all([bootstrapSaga(), loginSaga()]);
}
