import { createSlice } from "@reduxjs/toolkit";
import { defaultTheme } from "../../components/App.style";

const initialState = {
  theme: defaultTheme,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    CHANGE_THEME(state, { payload: { theme } }) {
      state.theme = theme;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
