import React from "react";
import fp from "lodash/fp";
import { CardContent, Typography } from "@material-ui/core";
import Comment from "../Comment/Comment";
import useStyles from "./CommentList.style";

const CommentList = ({ comments = [] }) => {
  const classes = useStyles();

  return (
    <div role="figure" aria-label="comment-list" className={classes.root}>
      {fp.isEmpty(comments) ? (
        <CardContent>
          <Typography variant="caption" display="block" component="p">
            Please enter your first comment.
          </Typography>
        </CardContent>
      ) : (
        fp.map(
          (comment) => <Comment key={comment.id} comment={comment} />,
          comments
        )
      )}
    </div>
  );
};

export default CommentList;
