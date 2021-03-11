import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userEvent from "@testing-library/user-event";
import { articleActions } from "../../reducers/article/articleReducer";
import rootReducer from "../../reducers/rootReducer";
import Article from "./Article";

describe("[Article]", () => {
  beforeEach(() => {
    render(
      <Provider store={createStore(rootReducer)}>
        <Article />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("구성요소 테스트", () => {
      expect(screen.getByRole("header", { name: "title" })).toBeInTheDocument();
      expect(
        screen.getByRole("header", { name: "author-info" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "favorite" })
      ).toBeInTheDocument();
      expect(screen.getByRole("figure", { name: "body" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "description" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "number-of-favorites" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "settings" })
      ).toBeInTheDocument();
      // expect(screen.getByRole("button", { name: "share" })).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "tag-list" })
      ).toBeInTheDocument();
      // expect(
      //   screen.getByRole("input", { name: "add-comment" })
      // ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "view-details" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    it("view-details 버튼을 클릭하면, view-details가 열린다.", () => {
      userEvent.click(screen.getByRole("button", { name: "view-details" }));
      expect(
        screen.getByRole("presentation", { name: "view-details" })
      ).toBeVisible();
    });
  });

  describe("상태 테스트", () => {
    it(`favorite 버튼을 누르면 ${articleActions.FAVORITE_ARTICLE.type}이 호출된다.`, () => {
      const mockCall = jest.spyOn(articleActions, "FAVORITE_ARTICLE");

      userEvent.click(screen.getByRole("button", { name: "favorite" }));
      expect(mockCall).toHaveBeenCalled();
    });
  });
});
