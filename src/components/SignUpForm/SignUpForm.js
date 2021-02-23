import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import validator from "email-validator";
import { useDispatch } from "react-redux";
import useStyles from "./SignUpForm.style";
import utils from "../../utils/utils";
import { userActions } from "../../reducers/user/userReducer";

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

  const onChangeTextField = fp.curry((prop, e) => {
    setFormData((prev) => ({ ...prev, [prop]: e.target.value }));
  });

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
        pred: validator.validate,
        message: "Not in E-Mail format.",
        el: emailRef,
      },
    ]);

    if (fp.isUndefined(result)) {
    } else {
      fp.invoke(["3", "current", "focus"], result);
      dispatch(
        userActions.registration_failure({
          errors: { body: fp.get("2", result) },
        })
      );
    }
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
        autoFocus
        value={formData.email}
        onChange={onChangeTextField("email")}
        inputRef={emailRef}
      />
      <TextField
        className={classes.margin}
        aria-label="username"
        role="input"
        label="Username"
        required
        fullWidth
        value={formData.username}
        onChange={onChangeTextField("username")}
        inputRef={usernameRef}
      />
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password"
        role="input"
        label="Password"
        required
        fullWidth
        value={formData.password}
        onChange={onChangeTextField("password")}
        inputRef={passwordRef}
      />
      <TextField
        className={classes.margin}
        type="password"
        aria-label="password-confirm"
        role="input"
        label="Password Confirm"
        required
        fullWidth
        value={formData.passwordConfirm}
        onChange={onChangeTextField("passwordConfirm")}
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
