import { createSlice } from "@reduxjs/toolkit";
import fp from "lodash/fp";

const initialState = {
  comments: [],

  // [요청 관련상태]
  getCommentsFromAnArticle: { request: false, success: false, failure: "" },
  addCommentsToAnArticle: { request: false, success: false, failure: "" },
  deleteComment: { request: false, success: false, failure: "" },
};

const commentSlice = createSlice({
  name: "comment",
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

    ADD_COMMENTS_TO_AN_ARTICLE(state) {
      state.addCommentsToAnArticle = {
        request: true,
        success: false,
        failure: "",
      };
    },
    ADD_COMMENTS_TO_AN_ARTICLE_SUCCESS(state, { payload: { comment } }) {
      state.comments = [comment, ...state.comments];
      state.addCommentsToAnArticle = {
        request: false,
        success: true,
        failure: "",
      };
    },
    ADD_COMMENTS_TO_AN_ARTICLE_FAILURE(state, { payload: { errors } }) {
      state.addCommentsToAnArticle = {
        request: false,
        success: false,
        failure: errors,
      };
    },

    DELETE_COMMENTS(state) {
      state.deleteComment = {
        request: true,
        success: false,
        failure: "",
      };
    },
    DELETE_COMMENTS_SUCCESS(state, { orgPayload }) {
      state.comments = fp.filter(
        (comment) => !fp.isEqual(comment.id, orgPayload.id),
        state.comments
      );
      state.deleteComment = {
        request: false,
        success: true,
        failure: "",
      };
    },
    DELETE_COMMENTS_FAILURE(state, { payload: { errors } }) {
      state.deleteComment = {
        request: false,
        success: false,
        failure: errors,
      };
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice.reducer;
