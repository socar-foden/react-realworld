import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import email_validator from "email-validator";
import { useDispatch, useSelector } from "react-redux";
import utils, {
  EMAIL_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
} from "../../utils/utils";
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
  const {
    registration: { success: registration_success },
  } = useSelector((rootReducer) => rootReducer.userReducer);

  const handleClickCancel = () => {
    history.push("/sign-in");
  };

  const handleSubmitForm = (e) => {
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

    if (fp.isUndefined(result)) {
      dispatch(
        userActions.REGISTRATION({
          signUpInfo: {
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
    <form
      className={classes.root}
      aria-label="sign-up"
      onSubmit={handleSubmitForm}
    >
      <TextField
        className={classes.margin}
        inputProps={{
          "aria-label": "e-mail",
          role: "input",
          maxLength: EMAIL_MAX_LENGTH,
        }}
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
        inputProps={{
          "aria-label": "username",
          role: "input",
          maxLength: USERNAME_MAX_LENGTH,
        }}
        label="Username"
        required
        fullWidth
        value={formData.username}
        onChange={utils.handleChangeTextField(setFormData, "username")}
        inputRef={usernameRef}
      />
      <TextField
        className={classes.margin}
        inputProps={{
          "aria-label": "password",
          role: "input",
          maxLength: PASSWORD_MAX_LENGTH,
        }}
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
        inputProps={{
          "aria-label": "password-confirm",
          role: "input",
          maxLength: PASSWORD_MAX_LENGTH,
        }}
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
          disabled={registration_success}
        >
          Sign up
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          aria-label="cancel"
          onClick={handleClickCancel}
          disabled={registration_success}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
