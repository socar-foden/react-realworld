import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import { userActions } from "../../reducers/user/userReducer";
import SignUp from "./SignUp";

describe("[SignUp]", () => {
  let store;
  let history;

  beforeEach(() => {
    store = createStore(rootReducer);
    history = createMemoryHistory();
    const route = "/sign-up";
    history.push(route);

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignUp />
        </Router>
      </Provider>
    );
  });

  describe("상태 테스트", () => {
    describe("로그인 성공시", () => {
      beforeEach(() => {
        store.dispatch({ type: userActions.REGISTRATION_SUCCESS.type });
      });

      it("성공 알림창이 뜬다.", () => {
        expect(
          screen.getByRole("alert", { name: "success" })
        ).toBeInTheDocument();
      });

      it("알림창이 사라지면 /로 이동한다.", async () => {
        expect(
          screen.getByRole("alert", { name: "success" })
        ).toBeInTheDocument();

        await waitForElementToBeRemoved(
          screen.getByRole("alert", { name: "success" }),
          { timeout: 3000 }
        );
        expect(history.location.pathname).toBe("/");
      });
    });
  });

  describe("로그인 실패시", () => {
    it("실패 알림창이 뜬다.", () => {
      store.dispatch({
        type: userActions.REGISTRATION_FAILURE.type,
        payload: { errors: "already exist" },
      });
      expect(screen.getByRole("alert", { name: "error" })).toBeInTheDocument();
    });
  });
});
