import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import RouterSwitch from "./RouterSwitch/RouteSwitch";
import themeMap from "./App.style";

const App = () => {
  const { themeName } = useSelector((rootReducer) => rootReducer.uiReducer);

  return (
    <ThemeProvider theme={themeMap[themeName]}>
      <CssBaseline />
      <RouterSwitch />
    </ThemeProvider>
  );
};

export default App;
