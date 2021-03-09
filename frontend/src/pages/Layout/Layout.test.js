import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import rootReducer from "../../reducers/rootReducer";
import Layout from "./Layout";

describe("[Layout]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Router history={createMemoryHistory()}>
          <Layout />
        </Router>
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("헤더가 존재한다.", () => {
      expect(screen.getByRole("banner")).toBeInTheDocument();
    });

    it("사이드 메뉴가 존재한다.", () => {
      expect(
        screen.getByRole("navigation", { name: "side-nav" })
      ).toBeInTheDocument();
    });
  });
});
