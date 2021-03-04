import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import email_validator from "email-validator";
import utils from "../../utils/utils";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./SignInForm.style";

const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const {
    authentication: {
      success: authentication_success,
    },
  } = useSelector((rootReducer) => rootReducer.userReducer);

  const handleClickSignIn = (e) => {
    e.preventDefault();

    const result = utils.validate([
      {
        v: formData.email,
        pred: fp.negate(fp.isEmpty),
        message: "E-Mail is required.",
        el: emailRef,
      },
      {
        v: formData.password,
        pred: fp.negate(fp.isEmpty),
        message: "Password is required.",
        el: passwordRef,
      },

      // 포맷 체크
      {
        v: formData.email,
        pred: email_validator.validate,
        message: "Not in E-Mail format.",
        el: emailRef,
      },
    ]);

    if (fp.isUndefined(result)) {
      dispatch(
        userActions.AUTHENTICATION({
          user: {
            email: formData.email,
            password: formData.password,
          },
        })
      );
    } else {
      fp.invoke(["el", "current", "focus"], result);
      dispatch(
        userActions.AUTHENTICATION_FAILURE({
          errors: fp.get("message", result),
        })
      );
    }
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
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        inputRef={emailRef}
      />
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "password", role: "input" }}
        type="password"
        label="Password"
        required
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "password")}
        value={formData.password}
        inputRef={passwordRef}
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          aria-label="sign-in"
          onClick={handleClickSignIn}
          disabled={authentication_success}
        >
          Sign in
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          color="secondary"
          aria-label="sign-up"
          onClick={handleClickSignUp}
          disabled={authentication_success}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
