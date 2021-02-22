import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import SignUpForm from "./SignUpForm";

describe("[SignUpForm]", () => {
  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      const { getByRole, unmount } = render(<SignUpForm />);

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

  describe("UX 테스트", () => {
    it("CANCEL 버튼 클릭시 /로 이동", () => {
      const history = createMemoryHistory();
      const route = "/sign-in";
      history.push(route);

      const { getByRole, unmount } = render(
        <Router history={history}>
          <SignUpForm />
        </Router>
      );

      userEvent.click(getByRole("button", { name: "cancel" }));
      expect(history.location.pathname).toBe("/");
      unmount();
    });
  });
});
