import { Card, CardContent, Popover, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
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
                <Typography component="h5" variant="h6">
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
      </Card>
    </Popover>
  );
};

export default Profile;
