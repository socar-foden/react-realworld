import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { articleActions } from "../../reducers/article/articleReducer";
import rootReducer from "../../reducers/rootReducer";
import Article from "./Article";
import { commentActions } from "../../reducers/comment/commentReducer";

const mockArticle = {
  favorited: false,
  author: { username: "test" },
  tagList: [],
  favoritesCount: 0,
};

describe("[Article]", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();

    render(
      <Provider store={createStore(rootReducer)}>
        <Router history={history}>
          <Article article={mockArticle} />
        </Router>
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
        screen.getByRole("figure", { name: "tag-list" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "view-comments" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    it("view-comments 버튼을 클릭하면, comments dialog가 열린다.", () => {
      userEvent.click(screen.getByRole("button", { name: "view-comments" }));
      expect(
        screen.getByRole("presentation", { name: "comments" })
      ).toBeVisible();
    });
  });

  describe("상태 테스트", () => {
    it(`favorite 버튼을 클릭하면, ${articleActions.FAVORITE_ARTICLE.type}이 호출된다.`, () => {
      const mockCall = jest.spyOn(articleActions, "FAVORITE_ARTICLE");

      userEvent.click(screen.getByRole("button", { name: "favorite" }));
      expect(mockCall).toHaveBeenCalled();
    });

    it(`unfavorite 버튼을 클릭하면, ${articleActions.UNFAVORITE_ARTICLE.type}이 호출된다.`, () => {
      render(
        <Provider store={createStore(rootReducer)}>
          <Router history={history}>
            <Article article={{ ...mockArticle, favorited: true }} />
          </Router>
        </Provider>
      );

      const mockCall = jest.spyOn(articleActions, "UNFAVORITE_ARTICLE");

      userEvent.click(screen.getByRole("button", { name: "unfavorite" }));
      expect(mockCall).toHaveBeenCalled();
    });

    it(`view-comments 버튼을 클릭하면, ${commentActions.GET_COMMENTS_FROM_AN_ARTICLE.type}이 호출된다.`, () => {
      const mockCall = jest.spyOn(
        commentActions,
        "GET_COMMENTS_FROM_AN_ARTICLE"
      );

      userEvent.click(screen.getByRole("button", { name: "view-comments" }));
      expect(mockCall).toHaveBeenCalled();
    });

    it("author를 클릭하면 /profile/:username으로 이동한다.", () => {
      userEvent.click(screen.getByRole("button", { name: "author" }));
      expect(history.location.pathname).toBe(
        `/profile/${mockArticle.author.username}`
      );
    });
  });
});
