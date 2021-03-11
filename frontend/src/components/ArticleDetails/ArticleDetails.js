import { Dialog } from "@material-ui/core";
import React from "react";

const ArticleDetails = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-label="view-details"
    >
      <h2 id="modal-title">My Title</h2>
    </Dialog>
  );
};

export default ArticleDetails;
