import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../pages/Home";

const RouteSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>ㅅ
        <Home />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default RouteSwitch;
