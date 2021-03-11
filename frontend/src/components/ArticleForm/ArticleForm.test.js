import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { articleActions } from "../../reducers/article/articleReducer";
import rootReducer from "../../reducers/rootReducer";
import ArticleForm from "./ArticleForm";

describe("[ArticleForm]", () => {
  let store;

  beforeEach(() => {
    store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <ArticleForm />
      </Provider>
    );
  });

  describe("UI 테스트", () => {
    it("폼 구성요소 테스트", () => {
      expect(screen.getByRole("input", { name: "title" })).toBeInTheDocument();
      expect(screen.getByRole("input", { name: "body" })).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "description" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("input", { name: "tag-list" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "submit" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("figure", { name: "tag-list" })
      ).toBeInTheDocument();
    });
  });

  describe("UX 테스트", () => {
    beforeEach(() => {
      fireEvent.change(screen.getByRole("input", { name: "title" }), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByRole("input", { name: "body" }), {
        target: { value: "" },
      });
      fireEvent.change(screen.getByRole("input", { name: "title" }), {
        target: { value: "" },
      });
    });

    describe("title, body, description 값이", () => {
      beforeEach(() => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "" },
        });
        fireEvent.change(screen.getByRole("input", { name: "description" }), {
          target: { value: "" },
        });
      });

      it("하나라도 없으면 submit 버튼은 비활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "test-title" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();

        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "test-body" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeDisabled();
      });

      it("모두 있으면 submit 버튼은 활성화", () => {
        fireEvent.change(screen.getByRole("input", { name: "title" }), {
          target: { value: "test-title" },
        });
        fireEvent.change(screen.getByRole("input", { name: "body" }), {
          target: { value: "test-body" },
        });
        fireEvent.change(screen.getByRole("input", { name: "description" }), {
          target: { value: "test-description" },
        });
        expect(screen.getByRole("button", { name: "submit" })).toBeEnabled();
      });
    });
  });

  describe("상태 테스트", () => {
    it(`올바른 title, body, description 입력후 submit시 ${articleActions.CREATE_ARTICLE.type}을 호출한다.`, () => {
      const mockCall = jest.spyOn(articleActions, "CREATE_ARTICLE");

      fireEvent.change(screen.getByRole("input", { name: "title" }), {
        target: { value: "test-title" },
      });
      fireEvent.change(screen.getByRole("input", { name: "body" }), {
        target: { value: "test-body" },
      });
      fireEvent.change(screen.getByRole("input", { name: "description" }), {
        target: { value: "test-description" },
      });
      fireEvent.submit(screen.getByRole("form", { name: "article" }));
      expect(mockCall).toHaveBeenCalled();
    });

    it(`${articleActions.CREATE_ARTICLE_SUCCESS.type} 호출시, 추가된 article이 articles에 추가된다.`, () => {
      const article = {
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "You have to believe",
        tagList: ["reactjs", "angularjs", "dragons"],
      };

      expect(store.getState().articleReducer.articles).not.toContain(article);
      store.dispatch({
        type: articleActions.CREATE_ARTICLE_SUCCESS.type,
        payload: {
          article,
        },
      });
      expect(store.getState().articleReducer.articles).toContain(article);
    });
  });
});
