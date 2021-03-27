import React from "react";
import fp from "lodash/fp";
import loadable from "@loadable/component";
const Article = loadable(() => import("../Article/Article"));
const IntersectionObserver = loadable(() =>
  import("../IntersectionObserver/IntersectionObserver"));

const ArticleList = ({ articles = [], articlesCount = 0, next = fp.noop }) => {
  return (
    <div role="figure" aria-label="article-list">
      {fp.map(
        (article) => (
          <Article key={article.slug} article={article} />
        ),
        articles
      )}

      {!fp.isEmpty(articles) && articlesCount > articles.length && (
        <IntersectionObserver next={() => next(articles.length)} />
      )}
    </div>
  );
};

export default ArticleList;
