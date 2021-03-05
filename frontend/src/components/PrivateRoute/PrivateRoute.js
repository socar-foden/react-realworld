import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...props }) => {
  const {
    user: { token },
  } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <Route {...props}>{token ? children : <Redirect to="/sign-in" />}</Route>
  );
};

export default PrivateRoute;
