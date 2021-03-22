import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import fp from "lodash/fp";
import { useDispatch } from "react-redux";
import { userActions } from "../../reducers/user/userReducer";
import utils, { EMAIL_MAX_LENGTH, USERNAME_MAX_LENGTH } from "../../utils/utils";
import useStyles from "./AccountForm.style";

const initFormData = {
  email: "",
  username: "",
};

const AccountForm = ({ user = initFormData }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ ...user });
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      userActions.UPDATE_USER({
        userInfo: {
          email: formData.email,
          username: formData.username,
        },
      })
    );
  };

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmitForm}
      aria-label="article"
    >
      <TextField
        inputProps={{ "aria-label": "e-mail", role: "input", maxLength: EMAIL_MAX_LENGTH }}
        label="E-mail"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        margin="dense"
      />
      <TextField
        inputProps={{ "aria-label": "username", role: "input", maxLength: USERNAME_MAX_LENGTH }}
        label="Username"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "username")}
        value={formData.username}
        margin="dense"
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          aria-label="submit"
          disabled={fp.some(fp.isEmpty, [formData.email, formData.username])}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
