import React from "react";
import { useSelector } from "react-redux";
import fp from "lodash/fp";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...props }) => {
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <Route {...props}>{fp.get('token', user) ? children : <Redirect to="/sign-in" />}</Route>
  );
};

export default PrivateRoute;
