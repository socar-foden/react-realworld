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

const defaultTheme = createMuiTheme({
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

export const DEFAULT_THEME = "default";
export const DARK_THEME = "dark";

const themeMap = {
  [DEFAULT_THEME]: defaultTheme,
  [DARK_THEME]: darkTheme,
};

export default themeMap;
