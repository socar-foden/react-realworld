import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import fp from "lodash/fp";
import utils from "../../utils/utils";
import useStyles from "./AccountForm.style";

const initFormData = {
  email: "",
};

const AccountForm = ({ user = initFormData }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ ...user });

  const handleSubmitForm = () => {};

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmitForm}
      aria-label="article"
    >
      <TextField
        inputProps={{ "aria-label": "e-mail", role: "input" }}
        label="E-mail"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        margin="dense"
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          aria-label="submit"
          disabled={fp.some(fp.isEmpty, [formData.email, formData.bio])}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
