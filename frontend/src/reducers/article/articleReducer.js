import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // [요청 관련상태]
  createArticle: { request: false, success: false, failure: "" },
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
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;