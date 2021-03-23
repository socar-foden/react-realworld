import React, { useRef, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import email_validator from "email-validator";
import { useTranslation } from "react-i18next";
import utils, {
  EMAIL_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "../../utils/utils";
import {
  EMAIL,
  IS_REQUIRED,
  NOT_EMAIL_FORMAT,
  PASSWORD,
  SIGN_IN,
  SIGN_UP,
} from "../../i18n/constants";
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
    authentication: { success: authentication_success },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const { t } = useTranslation();

  const handleClickForm = (e) => {
    e.preventDefault();

    const result = utils.validate([
      {
        v: formData.email,
        pred: fp.negate(fp.isEmpty),
        message: `${t(EMAIL)} ${t(IS_REQUIRED)}`,
        el: emailRef,
      },
      {
        v: formData.password,
        pred: fp.negate(fp.isEmpty),
        message: `${t(PASSWORD)} ${t(IS_REQUIRED)}`,
        el: passwordRef,
      },

      // 포맷 체크
      {
        v: formData.email,
        pred: email_validator.validate,
        message: t(NOT_EMAIL_FORMAT),
        el: emailRef,
      },
    ]);

    if (fp.isUndefined(result)) {
      dispatch(
        userActions.AUTHENTICATION({
          signInInfo: {
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
    <form
      className={classes.root}
      aria-label="sign-in"
      onSubmit={handleClickForm}
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
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        inputRef={emailRef}
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
          disabled={authentication_success}
        >
          {t(SIGN_IN)}
        </Button>
        <Button
          className={classes.margin}
          variant="contained"
          color="secondary"
          aria-label="sign-up"
          onClick={handleClickSignUp}
          disabled={authentication_success}
        >
          {t(SIGN_UP)}
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
