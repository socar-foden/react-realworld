import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";

describe("[SignUpForm]", () => {
  it("UI 테스트", () => {
    const { getByRole, unmount } = render(<SignUpForm />);

    expect(getByRole("input", { name: "username" })).toBeInTheDocument();
    expect(getByRole("input", { name: "e-mail" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    expect(
      getByRole("input", { name: "password-confirm" })
    ).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-up" })).toBeInTheDocument();
    unmount();
  });
});
