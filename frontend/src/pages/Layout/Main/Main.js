import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadable from "@loadable/component";
import { articleActions } from "../../../reducers/article/articleReducer";
import useStyles from "./Main.style";
const ArticleForm = loadable(() =>
  import("../../../components/ArticleForm/ArticleForm")
);
const ArticleList = loadable(() =>
  import("../../../components/ArticleList/ArticleList")
);

const LIMIT = 5;

const Main = () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector(
    (rootReducer) => rootReducer.articleReducer
  );
  const classes = useStyles();
  const [offset, setOffset] = useState(-1);

  const dispatchListArticle = (articlesLength) => {
    const nextOffset = offset + 1;

    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {
          limit: LIMIT,
          offset: articlesLength,
        },
      })
    );
    setOffset(nextOffset);
  };

  useEffect(() => {
    dispatchListArticle(0);

    return () => {
      dispatch(articleActions.LIST_ARTICLES_INIT());
    };
  }, []);

  return (
    <div className={classes.root}>
      <ArticleForm />

      <ArticleList
        articles={articles}
        articlesCount={articlesCount}
        next={dispatchListArticle}
      />
    </div>
  );
};

export default Main;
