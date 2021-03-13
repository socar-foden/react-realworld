import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
            label="Add Comment.."
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
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
