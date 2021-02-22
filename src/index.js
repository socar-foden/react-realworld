import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";

const middleware = [];
const reducer = (state = {}, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state };
    default:
      return { ...state };
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
