import React from "react";
import { InView } from "react-intersection-observer";
import fp from "lodash/fp";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./IntersectionObserver.style";

const IntersectionObserver = ({ next = fp.noop, loading = true }) => {
  const classes = useStyles();

  const handleChange = (inView) => inView && next();

  return (
    <InView onChange={handleChange}>
      {({ ref }) => (
        <div ref={ref} className={classes.root}>
          {loading && <CircularProgress />}
        </div>
      )}
    </InView>
  );
};

export default IntersectionObserver;
