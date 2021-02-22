import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import useStyles from "./SignUp.style";

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
