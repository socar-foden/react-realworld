import React from "react";
import { Route, Switch } from "react-router";
import loadable from "@loadable/component";
import Layout from "../../pages/Layout/Layout";
const SignIn = loadable(() => import("../../pages/SignIn/SignIn"));
const SignUp = loadable(() => import("../../pages/SignUp/SignUp"));
const PrivateRoute = loadable(() => import("../PrivateRoute/PrivateRoute"));

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
