import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("[LoginForm]", () => {
  it("id, password input이 존재", () => {
    const { container, unmount, getByRole } = render(<LoginForm />);
    getByRole("input", { name: 'email' });
    getByRole("input", { name: 'password' });
    unmount();
  });
});
