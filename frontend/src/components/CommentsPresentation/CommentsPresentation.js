import { Dialog } from "@material-ui/core";
import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";

const CommentsPresentation = ({ open, handleClose, comments = [] }) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-label="comments"
      role="presentation"
      fullWidth
    >
      <CommentList comments={comments} />

      <CommentForm />
    </Dialog>
  );
};

export default CommentsPresentation;
