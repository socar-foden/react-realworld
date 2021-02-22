import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import App from "../App";

describe("[RouterSwitch]", () => {
  it("라우팅 테스트", () => {
    const history = createMemoryHistory();
    const { getByRole, unmount } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(getByRole("input", { name: "email" })).toBeInTheDocument();
    expect(getByRole("input", { name: "password" })).toBeInTheDocument();
    unmount();
  });
});
