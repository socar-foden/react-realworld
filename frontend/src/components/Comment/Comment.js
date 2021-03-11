import {
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./Comment.style";

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar role="figure" aria-label="image">
        <Button
          aria-label="username"
          color="inherit"
          // onClick={handleClickSignOut}
        >
          <AccountCircleIcon fontSize="large" />
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
              Ali Connors
            </Typography>
            <Typography
              component="div"
              variant="caption"
              color="textSecondary"
              role="figure"
              aria-label="created-at"
            >
              September 14, 2016
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
            — Ill be in your neighborhood doing errands this…
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Comment;
