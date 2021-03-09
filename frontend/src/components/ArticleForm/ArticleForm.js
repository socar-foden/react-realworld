import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import utils from "../../utils/utils";
import useStyles from "./ArticleForm.style";

const ArticleForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    body: "",
    description: "",
  });

  return (
    <form className={classes.root}>
      <TextField
        label="Article"
        multiline
        size="small"
        fullWidth
        rowsMax={4}
        rows={2}
        variant="filled"
        inputProps={{ role: "input", "aria-label": "body" }}
      />
      <TextField
        inputProps={{ "aria-label": "description", role: "input" }}
        label="Description"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        //   inputRef={emailRef}
      />
      <TextField
        inputProps={{ "aria-label": "tags", role: "input" }}
        label="Tags"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "email")}
        value={formData.email}
        //   inputRef={emailRef}
      />
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          aria-label="submit"
          //  onClick={handleClickSignIn}
          //  disabled={authentication_success}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ArticleForm;
