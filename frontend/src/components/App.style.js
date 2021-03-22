import { createMuiTheme } from "@material-ui/core";

const globalStyle = {
  MuiCssBaseline: {
    "@global": {
      "html, body, #root": {
        width: "100%",
        height: "100%",
      },
    },
  },
};

const lightTheme = createMuiTheme({
  overrides: { ...globalStyle },
});

const darkTheme = createMuiTheme({
  overrides: { ...globalStyle },
  palette: {
    primary: {
      dark: "#212121",
      main: "#424242",
      light: "#616161",
    },
    secondary: {
      dark: "#004D40",
      main: "#00695C",
      light: "#00796B",
    },
  },
});

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const themeMap = {
  [LIGHT_THEME]: lightTheme,
  [DARK_THEME]: darkTheme,
};

export default themeMap;
