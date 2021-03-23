import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import email_validator from "email-validator";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import utils, {
  EMAIL_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  USERNAME_MAX_LENGTH,
} from "../../utils/utils";
import {
  CANCEL,
  EMAIL,
  IS_REQUIRED,
  NOT_EMAIL_FORMAT,
  PASSWORD,
  PASSWORDS_NOT_MATCH,
  PASSWORD_CONFIRM,
  SIGN_UP,
  USERNAME,
} from "../../i18n/constants";
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
  const { t } = useTranslation();

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
        message: `${t(EMAIL)} ${t(IS_REQUIRED)}`,
        el: emailRef,
      },
      {
        v: formData.username,
        pred: fp.negate(fp.isEmpty),
        message: `${t(USERNAME)} ${t(IS_REQUIRED)}`,
        el: usernameRef,
      },
      {
        v: formData.password,
        pred: fp.negate(fp.isEmpty),
        message: `${t(PASSWORD)} ${t(IS_REQUIRED)}`,
        el: passwordRef,
      },
      {
        v: formData.passwordConfirm,
        pred: fp.negate(fp.isEmpty),
        message: `${t(PASSWORD_CONFIRM)} ${t(IS_REQUIRED)}`,
        el: passwordConfirmRef,
      },

      // 포맷 체크
      {
        v: formData.email,
        pred: email_validator.validate,
        message: t(NOT_EMAIL_FORMAT),
        el: emailRef,
      },
      {
        v: formData.passwordConfirm,
        pred: fp.isEqual(formData.password),
        message: t(PASSWORDS_NOT_MATCH),
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
        label={t(EMAIL)}
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
        label={t(USERNAME)}
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
        label={t(PASSWORD)}
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
        label={t(PASSWORD_CONFIRM)}
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
          {t(SIGN_UP)}
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          aria-label="cancel"
          onClick={handleClickCancel}
          disabled={registration_success}
        >
          {t(CANCEL)}
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
