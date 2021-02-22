import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

describe("[LoginForm]", () => {
  it("id, password input이 존재", () => {
    const { unmount, getByRole } = render(<LoginForm />);
    expect(getByRole("input", { name: "email" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    expect(getByRole("button", { name: "submit" })).toBeInTheDocument();
    unmount();
  });
});
