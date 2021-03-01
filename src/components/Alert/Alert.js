import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./Alert.style";
import { Snackbar } from "@material-ui/core";

const Alert = ({
  severity = "error",
  message,
  handleOnClose,
  autoHideDuration = 1000,
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.root}
      autoHideDuration={autoHideDuration}
      open={true}
      onClose={handleOnClose}
      on
    >
      <MuiAlert elevation={6} variant="filled" severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
