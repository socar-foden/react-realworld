import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignInForm from "./SignInForm";

describe("[SignInForm]", () => {
  beforeEach(() => {
    render(<SignInForm />);
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
      expect(
        screen.getByRole("input", { name: "e-mail" }).lastChild.lastChild
      ).toHaveFocus();
    });
  });
});
