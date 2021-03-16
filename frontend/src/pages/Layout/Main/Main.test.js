import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { articleActions } from "../../../reducers/article/articleReducer";
import rootReducer from "../../../reducers/rootReducer";
import Main from "./Main";

describe("[Main]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Main />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("article form, article list 영역이 존재한다.", () => {
      expect(screen.getByRole("form", { name: "article" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "article-list" })
      ).toBeInTheDocument();
    });
  });

  describe("상태 테스트", () => {
    it(`렌더링시 최초 1회 ${articleActions.LIST_ARTICLES.type}을 호출한다.`, () => {
      const mockCall = jest.spyOn(articleActions, "LIST_ARTICLES");

      render(
        <Provider store={createStore(rootReducer)}>
          <Main />
        </Provider>
      );
      expect(mockCall).toHaveBeenCalledTimes(1);
    });
  });
});
