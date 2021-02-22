import React from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./LoginForm.style";

const LoginForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        aria-label="e-mail"
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
      <Button
        className={classes.margin}
        type="submit"
        variant="contained"
        color="primary"
        aria-label="sign-in"
      >
        Sign in
      </Button>
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

export default LoginForm;
