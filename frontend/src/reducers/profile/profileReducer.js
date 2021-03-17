import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},

  // [요청 관련상태]
  getProfile: { request: false, success: false, failure: "" },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    GET_PROFILE(state) {
      state.getProfile = { request: true, success: false, failure: "" };
    },
    GET_PROFILE_SUCCESS(state, { payload: { profile } }) {
      state.profile = profile;
      state.getProfile = { request: false, success: true, failure: "" };
    },
    GET_PROFILE_FAILURE(state, { payload: { errors } }) {
      state.getProfile = { request: false, success: false, failure: errors };
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
