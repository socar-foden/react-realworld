import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration: { request: false, success: false, failure: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registration_request(state) {
      state.registration = { request: true, success: false, failure: "" };
    },
    registration_success(state) {
      state.registration = { request: false, success: true, failure: "" };
    },
    registration_failure(
      state,
      {
        payload: {
          errors: { body },
        },
      }
    ) {
      state.registration = { request: false, success: false, failure: body };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
