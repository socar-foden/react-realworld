import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import email_validator from "email-validator";
import { useDispatch } from "react-redux";
import utils from "../../utils/utils";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./SignUpForm.style";

const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleClickCancel = () => {
    history.push("/");
  };

  const handleClickSignUp = (e) => {
    e.preventDefault();

    const result = utils.validate([
      // null 체크
      {
        v: formData.email,
        pred: fp.negate(fp.isEmpty),
        message: "E-Mail is required.",
        el: emailRef,
      },
      {
        v: formData.username,
        pred: fp.negate(fp.isEmpty),
        message: "Username is required.",
        el: usernameRef,
      },
      {
        v: formData.password,
        pred: fp.negate(fp.isEmpty),
        message: "Password is required.",
        el: passwordRef,
      },
      {
        v: formData.passwordConfirm,
        pred: fp.negate(fp.isEmpty),
        message: "Password Confirm is required.",
        el: passwordConfirmRef,
      },

      // 포맷 체크
      {
        v: formData.email,
        pred: email_validator.validate,
        message: "Not in E-Mail format.",
        el: emailRef,
      },
      {
        v: formData.passwordConfirm,
        pred: fp.isEqual(formData.password),
        message: "Password Confirm does not match Password.",
        el: passwordConfirmRef,
      },
    ]);

    // FIXME: ramda-fantasy Maybe로
    if (fp.isUndefined(result)) {
      dispatch(
        userActions.REGISTRATION({
          user: {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          },
        })
      );
    } else {
      fp.invoke(["el", "current", "focus"], result);
      dispatch(
        userActions.REGISTRATION_FAILURE({
          errors: fp.get("message", result),
        })
      );
    }
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
        value={formData.email}
        onChange={utils.handleChangeTextField(setFormData, "email")}
        inputRef={emailRef}
      />
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "username", role: "input" }}
        label="Username"
        required
        fullWidth
        value={formData.username}
        onChange={utils.handleChangeTextField(setFormData, "username")}
        inputRef={usernameRef}
      />
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "password", role: "input" }}
        type="password"
        label="Password"
        required
        fullWidth
        value={formData.password}
        onChange={utils.handleChangeTextField(setFormData, "password")}
        inputRef={passwordRef}
      />
      <TextField
        className={classes.margin}
        inputProps={{ "aria-label": "password-confirm", role: "input" }}
        type="password"
        label="Password Confirm"
        required
        fullWidth
        value={formData.passwordConfirm}
        onChange={utils.handleChangeTextField(setFormData, "passwordConfirm")}
        inputRef={passwordConfirmRef}
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="secondary"
          aria-label="sign-up"
          onClick={handleClickSignUp}
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