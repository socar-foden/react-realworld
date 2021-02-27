import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import useStyles from "./SignInForm.style";
import utils from "../../utils/utils";

const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickSignIn = () => {
    const result = utils.validate([]);
  };

  const handleClickSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <form className={classes.root}>
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "e-mail", role: "input" }}
        type="email"
        label="E-Mail"
        required
        fullWidth
        autoFocus
      />
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "password", role: "input" }}
        type="password"
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
          onClick={handleClickSignIn}
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
