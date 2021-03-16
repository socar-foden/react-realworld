import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_THEME } from "../../components/App.style";

const initialState = {
  themeName: DEFAULT_THEME,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    CHANGE_THEME(state, { payload: { themeName } }) {
      state.themeName = themeName;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
