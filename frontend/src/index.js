import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "core-js/stable";
import "regenerator-runtime/runtime";
// core-js/stable, regenerator-runtime/runtime를 임포트 한 후에 redux-saga를 임포트해야함
// https://redux-saga.js.org/
import App from "./components/App";
import axiosSetUp from "./axiosSetUp";
import rootSaga from "./sagas/rootSaga";
import authentication from "./middlewares/authentication";
import rootReducer from "./reducers/rootReducer";

axiosSetUp();

const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, authentication))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
