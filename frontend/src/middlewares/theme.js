import fp from "lodash/fp";
import { uiActions } from "../reducers/ui/uiReducer";

export const THEME = "realworld-theme";

const theme = () => (next) => (action) => {
  const { type, payload } = action;

  if (fp.isEqual(type, uiActions.CHANGE_THEME.type)) {
    const { themeName } = payload;

    localStorage.setItem(THEME, themeName);
  }

  return next(action);
};

export default theme;
