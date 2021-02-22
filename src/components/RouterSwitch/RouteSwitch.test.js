import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import App from "../App";

describe("[RouterSwitch]", () => {
  it("/로 접근시 Login 페이지 노출", () => {
    const history = createMemoryHistory();
    const { getByRole, unmount } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(getByRole("input", { name: "e-mail" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-in" })).toBeInTheDocument();
    expect(getByRole("button", { name: "sign-up" })).toBeInTheDocument();
    unmount();
  });
});
