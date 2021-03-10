import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { createStore } from "redux";
import SignUpForm from "./SignUpForm";
import utils from "../../utils/utils";
import userReducer, { userActions } from "../../reducers/user/userReducer";

describe("[SignUpForm]", () => {
  let history;

  const renderSignUpForm = () => {
    const store = createStore(userReducer);
    history = createMemoryHistory();
    const route = "/sign-up";
    history.push(route);

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignUpForm />
        </Router>
      </Provider>
    );
  };
  beforeEach(renderSignUpForm);

  describe("UI 테스트", () => {
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
    it("최초 렌더링시 email 인풋에 포커싱", () => {
      expect(screen.getByRole("input", { name: "e-mail" })).toHaveFocus();
    });

    it("CANCEL 버튼 클릭시 /sign-in로 이동", () => {
      userEvent.click(screen.getByRole("button", { name: "cancel" }));
      expect(history.location.pathname).toBe("/sign-in");
    });

    it("SIGN UP 버튼 클릭시 validate 함수를 호출", () => {
      const mockCall = jest.spyOn(utils, "validate");

      userEvent.click(screen.getByRole("button", { name: "sign-up" }));
      expect(mockCall).toHaveBeenCalled();
    });
  });

  describe("상태 테스트", () => {
    describe("SIGN UP 버튼 클릭", () => {
      it(`validate를 통과하지 못하면, ${userActions.REGISTRATION_FAILURE.type} 호출한다.`, () => {
        const mockCall = jest.spyOn(userActions, "REGISTRATION_FAILURE");

        userEvent.click(screen.getByRole("button", { name: "sign-up" }));
        expect(mockCall).toHaveBeenCalled();
      });

      describe("폼에 유효한 데이터를 입력하면", () => {
        beforeEach(() => {
          /**
           * 권장되는 userEvent는 type 이벤트가 정상적으로 작동하지 않음.
           */
          fireEvent.change(screen.getByRole("input", { name: "username" }), {
            target: { value: "jakesss" },
          });
          fireEvent.change(screen.getByRole("input", { name: "e-mail" }), {
            target: { value: "jake@jake.jake" },
          });
          fireEvent.change(screen.getByRole("input", { name: "password" }), {
            target: { value: "jakejake" },
          });
          fireEvent.change(
            screen.getByRole("input", { name: "password-confirm" }),
            {
              target: { value: "jakejake" },
            }
          );
        });

        it(`${userActions.REGISTRATION.type}액션을 호출한다.`, () => {
          const mockCall = jest.spyOn(userActions, "REGISTRATION");

          userEvent.click(screen.getByRole("button", { name: "sign-up" }));
          expect(mockCall).toHaveBeenCalled();
        });
      });
    });
  });
});
