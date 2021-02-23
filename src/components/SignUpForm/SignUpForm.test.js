import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { createStore } from "redux";
import SignUpForm from "./SignUpForm";
import userReducer from "../../reducers/user/userReducer";
import utils from "../../utils/utils";

describe("[SignUpForm]", () => {
  describe("UI 테스트", () => {
    beforeEach(() => {
      render(<SignUpForm />);
    });

    it("폼 구성요소 테스트", () => {
      expect(
        screen.getByRole("input", { name: "username" })
      ).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "e-mail" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "password" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "password-confirm" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "sign-up" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "cancel" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    let history;

    beforeEach(() => {
      history = createMemoryHistory();
      const route = "/sign-up";
      history.push(route);

      render(
        <Router history={history}>
          <SignUpForm />
        </Router>
      );
    });

    it("최초 렌더링시 email 인풋에 포커싱", () => {
      expect(
        screen.getByRole("input", { name: "e-mail" }).lastChild.lastChild
      ).toHaveFocus();
    });

    it("CANCEL 버튼 클릭시 /로 이동", () => {
      userEvent.click(screen.getByRole("button", { name: "cancel" }));
      expect(history.location.pathname).toBe("/");
    });

    it("SIGN UP 버튼 클릭시 validate 함수를 호출", () => {
      const validateCall = jest.spyOn(utils, 'validate');

      userEvent.click(screen.getByRole("button", { name: "sign-up" }));
      expect(validateCall).toHaveBeenCalled();
    });
  });

  describe("상태 테스트", () => {
    beforeEach(() => {
      const store = createStore(userReducer);

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );
    });

    // it("SIGN UP 버튼 클릭시 user/registration을 dispatch한다.", () => {

    // });
  });
});
