import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME } from "../../components/App.style";
import { L_EN } from "../../i18n";
import { THEME, LANGUAGE } from "../../middlewares/uiMiddleware";

const initialState = {
  themeName: localStorage.getItem(THEME) || DARK_THEME,
  language: localStorage.getItem(LANGUAGE) || L_EN,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    CHANGE_THEME(state, { payload: { themeName } }) {
      state.themeName = themeName;
    },

    CHANGE_LANGUAGE(state, { payload: { language } }) {
      state.language = language;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
