import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registration: { request: false, success: false, failure: "" },
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
    REGISTRATION_FAILURE(
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
