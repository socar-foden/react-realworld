import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./SignUpForm.style";

const SignUpForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        aria-label="username"
        role="input"
        label="Username"
        required
      />
      <TextField
        className={classes.margin}
        aria-label="e-mail"
        type="email"
        role="input"
        label="E-mail"
        required
      />
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password"
        role="input"
        label="Password"
        required
      />
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password-confirm"
        role="input"
        label="Password Confirm"
        required
      />
      <Button
        className={classes.margin}
        type="submit"
        variant="contained"
        color="secondary"
        aria-label="sign-up"
      >
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
