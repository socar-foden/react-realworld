import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import { userActions } from "../../reducers/user/userReducer";
import SignIn from "./SignIn";

describe("[SignUp]", () => {
  let store;
  let history;

  beforeEach(() => {
    store = createStore(rootReducer);
    history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>
    );
  });

  describe("상태 테스트", () => {
    describe("로그인 성공시", () => {
      it("성공 알림창이 뜬다.", () => {
        store.dispatch({ type: userActions.AUTHENTICATION_SUCCESS.type });
        expect(
          screen.getByRole("alert", { name: "success" })
        ).toBeInTheDocument();
      });
    });
  });
});
