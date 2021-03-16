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
