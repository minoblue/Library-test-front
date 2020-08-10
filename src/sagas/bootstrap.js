import { takeLatest, put } from "redux-saga/effects";
import { BOOTSTRAP, BOOTSTRAP_OK, BOOTSTRAP_NOT_OK } from "../action-types";

let bootstrap = function* () {
  let user = yield localStorage.getItem("user");

  if (!user) {
    yield put({ type: BOOTSTRAP_NOT_OK, payload: { user: null } });
  } else {
    yield put({ type: BOOTSTRAP_OK, payload: { user } });
  }
};

export function* bootstrapSaga() {
  yield takeLatest(BOOTSTRAP, bootstrap);
}
