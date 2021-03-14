import {
  Button,
  CardMedia,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import dateFormat from "dateformat";
import fp from "lodash/fp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsList from "../SettingsList/SettingsList";
import useStyles from "./Comment.style";

const Comment = ({ comment = { author: {} } }) => {
  const classes = useStyles();
  const { author } = comment;
  const [openSettings, setOpenSettings] = useState(false);

  const handleClickSettings = () => {
    setOpenSettings(true);
  };

  const handleOnClose = () => {
    setOpenSettings(false);
  };

  const commentSettingsList = [
    { name: "DELETE", handleClick: fp.noop },
    { name: "CANCEL", handleClick: () => setOpenSettings(false) },
  ];

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
      <IconButton
        aria-label="settings"
        className={classes.settings}
        onClick={handleClickSettings}
      >
        <MoreVertIcon />
      </IconButton>

      <SettingsList
        open={openSettings}
        handleClose={handleOnClose}
        settingsList={commentSettingsList}
      />
    </ListItem>
  );
};

export default Comment;
