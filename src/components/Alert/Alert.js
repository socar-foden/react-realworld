import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./Alert.style";
import { Snackbar } from "@material-ui/core";

const Alert = ({ severity = "error", message, open, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.root}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={severity}
        autoHideDuration
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
