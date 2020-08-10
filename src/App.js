import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

import "./App.css";
import { BOOTSTRAP } from "./action-types";

import Router from "./routing/router";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

function App() {
  store.dispatch({ type: BOOTSTRAP });
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
