import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignInForm from "./SignInForm";

describe("[SignInForm]", () => {
  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      const { unmount, getByRole } = render(<SignInForm />);

      expect(getByRole("input", { name: "e-mail" })).toBeInTheDocument();
      expect(getByRole("input", { name: "password" })).toBeInTheDocument();
      expect(getByRole("button", { name: "sign-in" })).toBeInTheDocument();
      expect(getByRole("button", { name: "sign-up" })).toBeInTheDocument();
      unmount();
    });
  });

  describe("UX 테스트", () => {
    it("최초 렌더링시 email 인풋에 포커싱", () => {
      const { unmount, getByRole } = render(<SignInForm />);

      expect(getByRole("input", { name: "e-mail" }).lastChild.lastChild).toHaveFocus();
      unmount();
    });
  });
});
