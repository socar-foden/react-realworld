import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE } from "./middlewares/uiMiddleware";

export const L_EN = "en";
export const L_KO = "ko";

const resources = {
  [L_EN]: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  [L_KO]: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LANGUAGE) || L_EN,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
