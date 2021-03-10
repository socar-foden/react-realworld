import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},

  // [요청 관련상태]
  registration: { request: false, success: false, failure: "" },
  authentication: { request: false, success: false, failure: "" },
  getCurrentUser: { request: false, success: false, failure: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    REGISTRATION(state) {
      state.registration = { request: true, success: false, failure: "" };
    },
    REGISTRATION_SUCCESS(state) {
      state.registration = { request: false, success: true, failure: "" };
    },
    REGISTRATION_FAILURE(state, { payload: { errors } }) {
      state.registration = { request: false, success: false, failure: errors };
    },

    AUTHENTICATION(state) {
      state.authentication = { request: true, success: false, failure: "" };
    },
    AUTHENTICATION_SUCCESS(state, { payload: { user } }) {
      state.user = user;
      state.authentication = { request: false, success: true, failure: "" };
    },
    AUTHENTICATION_FAILURE(state, { payload: { errors } }) {
      state.authentication = {
        request: false,
        success: false,
        failure: errors,
      };
    },

    GET_CURRENT_USER(state) {
      state.getCurrentUser = { request: true, success: false, failure: "" };
    },
    GET_CURRENT_USER_SUCCESS(state, { payload: { user } }) {
      state.user = user;
      state.getCurrentUser = { request: false, success: true, failure: "" };
    },
    GET_CURRENT_USER_FAILURE(state, { payload: { errors } }) {
      state.getCurrentUser = {
        request: false,
        success: false,
        failure: errors,
      };
    },

    SIGN_OUT() {},
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
