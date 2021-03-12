import { Dialog } from "@material-ui/core";
import React from "react";
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
      
      {/* TODO: 컴포넌트로 빼기 */}
      <div role="figure" aria-label="add-comment">

      </div>
    </Dialog>
  );
};

export default CommentsPresentation;
