import React from "react";
import fp from "lodash/fp";
import Comment from "../Comment/Comment";

const CommentList = ({ comments = [] }) => {
  return (
    <div role="figure" aria-label="comment-list">
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
