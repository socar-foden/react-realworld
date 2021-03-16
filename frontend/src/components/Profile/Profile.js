import {
  Button,
  Card,
  CardActions,
  CardContent,
  Popover,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import fp from "lodash/fp";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Skeleton from "@material-ui/lab/Skeleton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./Profile.style";

const Profile = ({ open, setOpen, anchorEl }) => {
  const classes = useStyles();
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userActions.GET_CURRENT_USER());
  }, []);

  const handleClickSignOut = () => {
    dispatch(userActions.SIGN_OUT());
    history.push("/sign-in");
  };

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

        <CardActions>
          <Button
            aria-label="sign-out"
            color="primary"
            onClick={handleClickSignOut}
          >
            <ExitToAppIcon fontSize="large" />
          </Button>
        </CardActions>
      </Card>
    </Popover>
  );
};

export default Profile;
