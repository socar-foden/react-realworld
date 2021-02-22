import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
});

export default theme;
