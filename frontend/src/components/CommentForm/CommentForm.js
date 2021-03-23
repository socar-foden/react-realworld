import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { ADD_COMMENT, SUBMIT } from "../../i18n/constants";
import { commentActions } from "../../reducers/comment/commentReducer";
import utils from "../../utils/utils";
import useStyles from "./CommentForm.style";

const initFormData = {
  body: "",
};

const CommentForm = ({ article = {} }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initFormData);
  const { t } = useTranslation();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(
      commentActions.ADD_COMMENTS_TO_AN_ARTICLE({
        slug: article.slug,
        comment: {
          body: formData.body,
        },
      })
    );
    setFormData(initFormData);
  };

  return (
    <form
      aria-label="comment"
      className={classes.root}
      onSubmit={handleSubmitForm}
    >
      <Grid container>
        <Grid item xs={9}>
          <TextField
            label={t(ADD_COMMENT)}
            variant="filled"
            fullWidth
            inputProps={{ "aria-label": "body", role: "input" }}
            value={formData.body}
            onChange={utils.handleChangeTextField(setFormData, "body")}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            color="primary"
            aria-label="submit"
            type="submit"
            fullWidth
            className={classes.fullHeight}
            disabled={!formData.body}
          >
            {t(SUBMIT)}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
