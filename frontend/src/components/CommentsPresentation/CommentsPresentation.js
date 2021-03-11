import { Dialog } from "@material-ui/core";
import React from "react";
import CommentList from "../CommentList/CommentList";

const CommentsPresentation = ({
  open,
  handleClose,
  comments = [],
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-label="comments"
      role="presentation"
    >
      <CommentList comments={[1, 1, 1, 1, 1]} />
    </Dialog>
  );
};

export default CommentsPresentation;
