import React from "react";
import { Redirect, Route } from "react-router";
import { TOKEN_KEY } from "../../axiosSetUp";

const PrivateRoute = ({ children, ...props }) => {
  const token = localStorage.getItem(TOKEN_KEY);

  return (
    <Route {...props}>{token ? children : <Redirect to="/sign-in" />}</Route>
  );
};

export default PrivateRoute;
