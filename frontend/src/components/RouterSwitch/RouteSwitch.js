import React from "react";
import { Route, Switch } from "react-router";
import Main from "../../pages/Main/Main";
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
      <Route path="/main">
        <Main />
      </Route>
    </Switch>
  );
};

export default RouteSwitch;
