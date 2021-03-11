import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],

  // [요청 관련상태]
  getCommentsFromAnArticle: { request: false, success: false, failure: "" },
};

const commentSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    GET_COMMENTS_FROM_AN_ARTICLE(state) {
      state.getCommentsFromAnArticle = {
        request: true,
        success: false,
        failure: "",
      };
    },
    GET_COMMENTS_FROM_AN_ARTICLE_SUCCESS(state, { payload: { comments } }) {
      state.comments = comments;
      state.getCommentsFromAnArticle = {
        request: false,
        success: true,
        failure: "",
      };
    },
    GET_COMMENTS_FROM_AN_ARTICLE_FAILURE(state, { payload: { errors } }) {
      state.getCommentsFromAnArticle = {
        request: false,
        success: false,
        failure: errors,
      };
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
