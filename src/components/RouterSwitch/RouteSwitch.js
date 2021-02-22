import React from "react";
import { Route, Switch } from "react-router";
import Login from "../../pages/Login/Login";

const RouteSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
    </Switch>
  );
};

export default RouteSwitch;
