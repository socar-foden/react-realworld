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

export const defaultTheme = createMuiTheme({
  overrides: { ...globalStyle },
});

export const darkTheme = createMuiTheme({
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
