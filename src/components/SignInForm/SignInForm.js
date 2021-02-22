import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "./SignInForm.style";

const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickSignUp = () => {
    history.push("sign-up");
  };

  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        aria-label="e-mail"
        type="email"
        role="input"
        label="E-mail"
        required
        fullWidth
      />
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password"
        role="input"
        label="Password"
        required
        fullWidth
      />
      <div>
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
          variant="contained"
          color="secondary"
          aria-label="sign-up"
          onClick={handleClickSignUp}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
