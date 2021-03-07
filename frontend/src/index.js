import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "core-js/stable";
import "regenerator-runtime/runtime";
// core-js/stable, regenerator-runtime/runtime를 임포트 한 후에 redux-saga를 임포트해야함
// https://redux-saga.js.org/
import App from "./components/App";
import configureStore from "./configureStore";
import axiosSetUp from "./axiosSetUp";

const { store, persistor } = configureStore();
axiosSetUp();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
