import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";
import useStyles from "./Progress.style";

const Progress = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Progress;
