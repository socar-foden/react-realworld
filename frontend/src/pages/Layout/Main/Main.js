import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleForm from "../../../components/ArticleForm/ArticleForm";
import { articleActions } from "../../../reducers/article/articleReducer";
import ArticleList from "../../../components/ArticleList/ArticleList";
import useStyles from "./Main.style";

const Main = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((rootReducer) => rootReducer.articleReducer);
  const classes = useStyles();

  useEffect(() => {
    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {},
      })
    );
  }, []);

  return (
    <div className={classes.root}>
      <ArticleForm />

      <ArticleList articles={articles} />
    </div>
  );
};

export default Main;
