import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME } from "../../components/App.style";
import { THEME } from "../../middlewares/uiMiddleware";

const initialState = {
  themeName: localStorage.getItem(THEME) || DARK_THEME,
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
