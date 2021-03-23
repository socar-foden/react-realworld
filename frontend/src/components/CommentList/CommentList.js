import React from "react";
import fp from "lodash/fp";
import { CardContent, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { PLEASE_ENTER_YOUR_FIRST_COMMENT } from "../../i18n/constants";
import Comment from "../Comment/Comment";
import useStyles from "./CommentList.style";

const CommentList = ({ comments = [], article = {} }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div role="figure" aria-label="comment-list" className={classes.root}>
      {fp.isEmpty(comments) ? (
        <CardContent>
          <Typography variant="body1" display="block" component="p">
            {t(PLEASE_ENTER_YOUR_FIRST_COMMENT)}
          </Typography>
        </CardContent>
      ) : (
        fp.map(
          (comment) => (
            <Comment key={comment.id} comment={comment} article={article} />
          ),
          comments
        )
      )}
    </div>
  );
};

export default CommentList;
