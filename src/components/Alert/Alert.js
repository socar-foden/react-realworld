import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./Alert.style";
import { Snackbar } from "@material-ui/core";

const Alert = ({ severity = "error", message, handleOnClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.root}
      autoHideDuration={1000}
      open={true}
      onClose={handleOnClose}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
