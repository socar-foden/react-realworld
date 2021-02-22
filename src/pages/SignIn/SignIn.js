import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import useStyles from "./SignIn.style";

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignInForm />
    </div>
  );
};

export default SignIn;
