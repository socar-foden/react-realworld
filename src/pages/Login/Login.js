import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import useStyles from "./Login.style";

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginForm />
    </div>
  );
};

export default Login;
