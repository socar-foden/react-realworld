import React from "react";
import fp from "lodash/fp";
import Comment from "../Comment/Comment";
import useStyles from "./CommentList.style";

const CommentList = ({ comments = [] }) => {
  const classes = useStyles();

  return (
    <div role="figure" aria-label="comment-list" className={classes.root}>
      {fp.map(
        (comment) => (
          <Comment key={comment.id} comment={comment} />
        ),
        comments
      )}
    </div>
  );
};

export default CommentList;
