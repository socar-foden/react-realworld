import React from "react";
import { Route, Switch } from "react-router";
import Main from "../../pages/Main/Main";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const RouteSwitch = () => {
  return (
    <Switch>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <PrivateRoute path="/">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </PrivateRoute>
      
    </Switch>
  );
};

export default RouteSwitch;
