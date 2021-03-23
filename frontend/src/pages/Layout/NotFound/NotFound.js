import { Container, Typography } from "@material-ui/core";
import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import useStyles from "./NotFound.style";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.iconWrapper}>
        <SentimentVeryDissatisfiedIcon fontSize="large" />
      </div>
      <Typography variant="h5" gutterBottom>
        Page Not Found..
      </Typography>
    </Container>
  );
};

export default NotFound;
