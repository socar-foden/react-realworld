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
import axiosDefaultSetUp from "./axiosDefaultSetUp";
import rootSaga from "./sagas/rootSaga";
import userMiddleware from "./middlewares/userMiddleware";
import rootReducer from "./reducers/rootReducer";
import uiMiddleware from "./middlewares/uiMiddleware";

axiosDefaultSetUp();

const mainMiddleWare = createSagaMiddleware(rootSaga);
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(mainMiddleWare, userMiddleware, uiMiddleware)
  )
);

mainMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
