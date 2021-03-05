import React from "react";
import { Route, Switch } from "react-router";
import Main from "../../pages/Main/Main";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const RouteSwitch = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <Main />
      </PrivateRoute>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
};

export default RouteSwitch;
