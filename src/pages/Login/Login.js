import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import useStyles from "./Login.style";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInForm />
    </div>
  );
};

export default Login;
