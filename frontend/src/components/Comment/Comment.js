import {
  Button,
  CardMedia,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import dateFormat from "dateformat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
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
            className={classes.commentBody}
          >
            {comment.body}
          </Typography>
        }
      />
      <IconButton aria-label="settings" className={classes.settings}>
        <MoreVertIcon />
      </IconButton>
    </ListItem>
  );
};

export default Comment;
