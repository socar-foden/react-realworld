import React from "react";
import fp from "lodash/fp";
import Article from "../Article/Article";

const ArticleList = ({ articles = [] }) => {
  return (
    <div role="figure" aria-label="article-list">
      {fp.map(
        (article) => (
          <Article key={article.slug} article={article} />
        ),
        articles
      )}
    </div>
  );
};

export default ArticleList;
