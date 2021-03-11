import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import Profile from "../Profile/Profile";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./Header.style";

const Header = ({ setOpenSide }) => {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickMenu = () => {
    setOpenSide((prev) => !prev);
  };

  const handleClickAccountCircle = (e) => {
    setOpenProfile(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClickSignOut = () => {
    dispatch(userActions.SIGN_OUT());
    history.push("/sign-in");
  };

  return (
    <AppBar position="sticky" role="banner">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClickMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          RealWorld
        </Typography>
        <Button
          aria-label="profile"
          color="inherit"
          onClick={handleClickAccountCircle}
        >
          <AccountCircleIcon fontSize="large" />
        </Button>
        <Button
          aria-label="sign-out"
          color="inherit"
          onClick={handleClickSignOut}
        >
          <ExitToAppIcon fontSize="large" />
        </Button>
        <Profile
          open={openProfile}
          setOpen={setOpenProfile}
          anchorEl={anchorEl}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
