import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import SignUpForm from "./SignUpForm";

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
      const route = "/sign-in";
      history.push(route);

      render(
        <Router history={history}>
          <SignUpForm />
        </Router>
      );
    });

    it("CANCEL 버튼 클릭시 /로 이동", () => {
      userEvent.click(screen.getByRole("button", { name: "cancel" }));
      expect(history.location.pathname).toBe("/");
    });
  });
});
