import React from "react";
import { Route, Switch } from "react-router";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import Layout from "../../pages/Layout/Layout";
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
        <Layout />
      </PrivateRoute>
    </Switch>
  );
};

export default RouteSwitch;
