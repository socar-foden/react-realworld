import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "./SignUpForm.style";

const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickCancel = () => {
    history.push("/");
  };

  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        aria-label="username"
        role="input"
        label="Username"
        required
        fullWidth
      />
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
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password-confirm"
        role="input"
        label="Password Confirm"
        required
        fullWidth
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="secondary"
          aria-label="sign-up"
        >
          Sign up
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          aria-label="cancel"
          onClick={handleClickCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
