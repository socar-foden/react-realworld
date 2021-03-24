import dateFormat from "dateformat";
import fp from "lodash/fp";
import { dateFormatMap } from "../i18n/constants";
import i18n from "../i18n/i18n";
import { uiActions } from "../reducers/ui/uiReducer";

export const THEME = "realworld-theme";
export const LANGUAGE = "realworld-language";

const uiMiddleware = () => (next) => (action) => {
  const { type, payload } = action;

  if (fp.isEqual(type, uiActions.CHANGE_THEME.type)) {
    const { themeName } = payload;

    localStorage.setItem(THEME, themeName);
  } else if (fp.isEqual(type, uiActions.CHANGE_LANGUAGE.type)) {
    const { language } = payload;

    dateFormat.i18n = dateFormatMap[language];

    i18n.changeLanguage(language);
    localStorage.setItem(LANGUAGE, language);
  }

  return next(action);
};

export default uiMiddleware;
