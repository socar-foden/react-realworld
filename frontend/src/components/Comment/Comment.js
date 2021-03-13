import {
  Button,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import dateFormat from "dateformat";
import useStyles from "./Comment.style";

const Comment = ({ comment = { author: {} } }) => {
  const classes = useStyles();
  const { author } = comment;

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar role="figure" aria-label="image">
        <Button
          aria-label="author"
          color="inherit"
          className={classes.imageWrapper}
        >
          {author.image ? (
            <CardMedia className={classes.cover} image={author.image} />
          ) : (
            <AccountCircleIcon fontSize="large" className={classes.cover} />
          )}
        </Button>
      </ListItemAvatar>
      <ListItemText
        primary={
          <>
            <Typography
              component="div"
              variant="body2"
              color="textPrimary"
              role="figure"
              aria-label="username"
            >
              {author.username}
            </Typography>
            <Typography
              component="div"
              variant="caption"
              color="textSecondary"
              role="figure"
              aria-label="created-at"
            >
              {dateFormat(comment.createdAt, "fullDate")}
            </Typography>
          </>
        }
        secondary={
          <Typography
            component="div"
            variant="caption"
            color="textPrimary"
            role="figure"
            aria-label="body"
          >
            {comment.body}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Comment;
