import React, { useEffect } from "react";
import fp from "lodash/fp";
import { useDispatch } from "react-redux";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import { articleActions } from "../../../reducers/article/articleReducer";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {},
      })
    );
  }, []);

  return (
    <div>
      <ArticleForm />

      {/* TODO: 컴포넌트로 */}
      <div role="figure" aria-label="article-list"></div>
    </div>
  );
};

export default Main;
