import React from "react";
import { Route, Switch } from "react-router";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

const RouteSwitch = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default RouteSwitch;
