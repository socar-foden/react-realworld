import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import RouterSwitch from "./RouterSwitch/RouteSwitch";

const App = () => {
  const { theme } = useSelector((rootReducer) => rootReducer.uiReducer);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterSwitch />
    </ThemeProvider>
  );
};

export default App;
