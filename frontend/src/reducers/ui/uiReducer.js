import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME } from "../../components/App.style";
import i18n from "../../i18n";
import { THEME } from "../../middlewares/uiMiddleware";

const initialState = {
  themeName: localStorage.getItem(THEME) || DARK_THEME,
  language: i18n.language,
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
