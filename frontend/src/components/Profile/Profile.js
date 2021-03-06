import {
  Card,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./Profile.style";

const Profile = ({ open, setOpen, anchorEl }) => {
  const classes = useStyles();
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.GET_CURRENT_USER());
  }, []);

  return (
    <Popover
      open={open}
      onClose={() => setOpen(false)}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div role="figure" aria-label="email">
              {!fp.isEmpty(user) ? (
                <Typography component="h5" variant="h5">
                  {user.username}
                </Typography>
              ) : (
                <Skeleton variant="rect" height={32} />
              )}
            </div>
            <div role="figure" aria-label="username">
              {!fp.isEmpty(user) ? (
                <Typography variant="subtitle1" color="textSecondary">
                  {user.email}
                </Typography>
              ) : (
                <Skeleton
                  className={classes.marginTop}
                  variant="rect"
                  height={28}
                />
              )}
            </div>
          </CardContent>
        </div>
        <div role="figure" aria-label="image">
          {!fp.isEmpty(user) ? (
            user.image ? (
              <CardMedia
                className={classes.cover}
                image={user.image}
                title="Live from space album cover"
              />
            ) : (
              <AccountBoxIcon className={classes.cover} />
            )
          ) : (
            <Skeleton variant="rect" width={120} height={118} />
          )}
        </div>
      </Card>
    </Popover>
  );
};

export default Profile;
