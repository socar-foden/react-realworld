import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import { articleActions } from "../../../reducers/article/articleReducer";
import IntersectionObserver from "../../../components/IntersectionObserver/IntersectionObserver";
import ArticleList from "../../../components/ArticleList/ArticleList";
import useStyles from "./Main.style";

const LIMIT = 5;

const Main = () => {
  const dispatch = useDispatch();
  const {
    articles,
    listArticles: { request },
    articlesCount,
  } = useSelector((rootReducer) => rootReducer.articleReducer);
  const classes = useStyles();
  const [offset, setOffset] = useState(-1);

  const dispatchListArticle = () => {
    const nextOffset = offset + 1;

    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {
          limit: LIMIT,
          offset: nextOffset * LIMIT,
        },
      })
    );
    setOffset(nextOffset);
  };

  useEffect(() => {
    dispatchListArticle();

    return () => {
      dispatch(articleActions.LIST_ARTICLES_INIT());
    };
  }, []);

  return (
    <div className={classes.root}>
      <ArticleForm />

      <ArticleList articles={articles} />

      {!fp.isEmpty(articles) && articlesCount > articles.length && (
        <IntersectionObserver next={dispatchListArticle} loading={request} />
      )}
    </div>
  );
};

export default Main;
