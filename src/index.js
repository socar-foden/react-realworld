import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";
// core-js/stable, regenerator-runtime/runtime를 임포트 한 후에 redux-saga를 임포트해야함
// https://redux-saga.js.org/
import createSagaMiddleware from "redux-saga";
import App from "./components/App";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "????";

const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
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
