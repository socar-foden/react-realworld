import React from "react";
import { render, screen } from "@testing-library/react";
import AccountForm from "./AccountForm";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";

describe("[AccountForm]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <AccountForm />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "e-mail" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "username" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
    });
  });
});
