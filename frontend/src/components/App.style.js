import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
});

export default theme;
