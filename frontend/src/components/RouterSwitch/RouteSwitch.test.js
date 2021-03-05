import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createMemoryHistory } from "history";
import App from "../App";
import rootReducer from "../../reducers/rootReducer";

describe("[RouterSwitch]", () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it("/sign-in으로 접근시 SignIn 페이지 노출", () => {
    const history = createMemoryHistory();
    const route = "/sign-in";
    history.push(route);
    const { getByRole, unmount } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    expect(getByRole("input", { name: "e-mail" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-in" })).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-up" })).toBeInTheDocument();
    unmount();
  });

  it("/sign-up으로 접근시 SignUp 페이지 노출", () => {
    const history = createMemoryHistory();
    const route = "/sign-up";
    history.push(route);
    const { getByRole, unmount } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    expect(getByRole("input", { name: "username" })).toBeInTheDocument();
    expect(getByRole("input", { name: "e-mail" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    expect(
      getByRole("input", { name: "password-confirm" })
    ).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-up" })).toBeInTheDocument();
    expect(getByRole("button", { name: "cancel" })).toBeInTheDocument();
    unmount();
  });
});
