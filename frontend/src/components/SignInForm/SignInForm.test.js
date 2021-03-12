import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SignInForm from "./SignInForm";
import utils from "../../utils/utils";
import { userActions } from "../../reducers/user/userReducer";
import rootReducer from "../../reducers/rootReducer";

describe("[SignInForm]", () => {
  beforeEach(() => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "e-mail" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "password" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "sign-in" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "sign-up" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    it("최초 렌더링시 email 인풋에 포커싱", () => {
      expect(screen.getByRole("input", { name: "e-mail" })).toHaveFocus();
    });

    it("폼 제출 시 validate 함수를 호출한다.", () => {
      const mockCall = jest.spyOn(utils, "validate");

      fireEvent.submit(screen.getByRole("form", { name: "sign-in" }));
      expect(mockCall).toHaveBeenCalled();
    });
  });

  describe("상태 테스트", () => {
    describe("폼 제출 시", () => {
      it(`validate를 통과하지 못하면, ${userActions.AUTHENTICATION_FAILURE.type}를 호출`, () => {
        const mockCall = jest.spyOn(userActions, "AUTHENTICATION_FAILURE");

        fireEvent.submit(screen.getByRole("form", { name: "sign-in" }));
        expect(mockCall).toHaveBeenCalled();
      });
    });

    it(`유효한 정보 입력시, ${userActions.AUTHENTICATION.type} 호출`, () => {
      const mockCall = jest.spyOn(userActions, "AUTHENTICATION");

      fireEvent.change(screen.getByRole("input", { name: "e-mail" }), {
        target: { value: "test@email.com" },
      });
      fireEvent.change(screen.getByRole("input", { name: "password" }), {
        target: { value: "as1@#5g@" },
      });
      userEvent.click(screen.getByRole("button", { name: "sign-in" }));
      expect(mockCall).toHaveBeenCalled();
    });
  });
});
