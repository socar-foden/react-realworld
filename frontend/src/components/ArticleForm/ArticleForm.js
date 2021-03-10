import { Button, Chip, TextField } from "@material-ui/core";
import React, { useState } from "react";
import fp from "lodash/fp";
import CloseIcon from "@material-ui/icons/Close";
import utils from "../../utils/utils";
import useStyles from "./ArticleForm.style";

const ArticleForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    description: "",
    tag: "",
    tags: [],
  });

  const handleKeyPressTag = (e) => {
    const { tag, tags } = formData;
    const newTag = fp.trim(tag);

    if (
      fp.isEqual(e.code, "Enter") &&
      !!newTag &&
      !fp.find(fp.isEqual(newTag), formData.tags)
    ) {
      setFormData((prev) => ({
        ...prev,
        tag: "",
        tags: [...tags, newTag],
      }));
    }
  };

  // eslint-disable-next-line no-unused-vars
  const handleOnDeleteTag = fp.curry((targetTag, e) => {
    setFormData((prev) => ({
      ...prev,
      tags: fp.filter(fp.negate(fp.isEqual(targetTag)), prev.tags),
    }));
  });

  return (
    <form className={classes.root}>
      <TextField
        inputProps={{ "aria-label": "title", role: "input" }}
        label="Title"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "title")}
        value={formData.email}
        //   inputRef={emailRef}
        margin="dense"
      />
      <TextField
        label="Article"
        multiline
        size="small"
        fullWidth
        rowsMax={4}
        rows={2}
        variant="filled"
        inputProps={{ role: "input", "aria-label": "body" }}
        onChange={utils.handleChangeTextField(setFormData, "body")}
        value={formData.body}
        margin="dense"
      />
      <TextField
        inputProps={{ "aria-label": "description", role: "input" }}
        label="Description"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "description")}
        value={formData.description}
        //   inputRef={emailRef}
        margin="dense"
      />
      <TextField
        inputProps={{ "aria-label": "tags", role: "input" }}
        label="Tags"
        fullWidth
        onChange={utils.handleChangeTextField(setFormData, "tag")}
        value={formData.tag}
        //   inputRef={emailRef}
        onKeyPress={handleKeyPressTag}
        margin="dense"
      />
      <div role="figure" aria-label="tags">
        {fp.map(
          (tag) => (
            <Chip
              key={tag}
              size="small"
              label={`#${tag}`}
              className={classes.margin_1}
              role="figure"
              aria-label="tag"
              onDelete={handleOnDeleteTag(tag)}
              deleteIcon={<CloseIcon role="button" aria-label="tag-delete" />}
            />
          ),
          formData.tags
        )}
      </div>
      <div>
        <Button
          className={classes.margin}
          type="submit"
          variant="contained"
          color="primary"
          aria-label="submit"
          //  onClick={handleClickSignIn}
          disabled={fp.some(fp.isEmpty, [
            formData.title,
            formData.body,
            formData.description,
          ])}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ArticleForm;
