import React, { useEffect } from "react";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import { articleActions } from "../../../reducers/article/articleReducer";
import Article from "../../../components/Article/Article";

const Main = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((rootReducer) => rootReducer.articleReducer);

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
      <div role="figure" aria-label="article-list">
        {fp.map(
          (article) => (
            <Article key={article.slug} article={article} />
          ),
          articles
        )}
      </div>
    </div>
  );
};

export default Main;
