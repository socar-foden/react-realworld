import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./App.style";
import RouterSwitch from "./RouterSwitch/RouteSwitch";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterSwitch />
    </ThemeProvider>
  );
};

export default App;
