import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import Header from "./Header";

describe("[Header]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Header />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(
        screen.getByRole("button", { name: "profile" })
      ).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "theme" })).toBeInTheDocument();
    });
  });
});
