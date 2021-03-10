import React from "react";
import fp from "lodash/fp";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";

const Main = () => {
  return (
    <div>
      <ArticleForm />

      {/* TODO: 컴포넌트로 */}
      <div role="figure" aria-label="article-list">
      </div>
    </div>
  );
};

export default Main;
