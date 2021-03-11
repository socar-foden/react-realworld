import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],

  // [요청 관련상태]
  createArticle: { request: false, success: false, failure: "" },
  listArticles: { request: false, success: false, failure: "" },
  favoriteArticle: { request: false, success: false, failure: "" },
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    CREATE_ARTICLE(state) {
      state.createArticle = { request: true, success: false, failure: "" };
    },
    CREATE_ARTICLE_SUCCESS(state) {
      state.createArticle = { request: false, success: true, failure: "" };
    },
    CREATE_ARTICLE_FAILURE(state, { payload: { errors } }) {
      state.createArticle = {
        request: false,
        success: false,
        failure: errors,
      };
    },

    LIST_ARTICLES(state) {
      state.listArticles = { request: true, success: false, failure: "" };
    },
    LIST_ARTICLES_SUCCESS(state, { payload: { articles } }) {
      state.articles = articles;
      state.listArticles = { request: false, success: true, failure: "" };
    },
    LIST_ARTICLES_FAILURE(state, { payload: { errors } }) {
      state.listArticles = {
        request: false,
        success: false,
        failure: errors,
      };
    },

    FAVORITE_ARTICLE(state) {
      state.favoriteArticle = { request: true, success: false, failure: "" };
    },
    FAVORITE_ARTICLE_SUCCESS(state) {
      state.favoriteArticle = { request: false, success: true, failure: "" };
    },
    FAVORITE_ARTICLE_FAILURE(state, { payload: { errors } }) {
      state.favoriteArticle = {
        request: false,
        success: false,
        failure: errors,
      };
    },
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
