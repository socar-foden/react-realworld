import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { defaultTheme } from "./App.style";
import RouterSwitch from "./RouterSwitch/RouteSwitch";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RouterSwitch />
    </ThemeProvider>
  );
};

export default App;
