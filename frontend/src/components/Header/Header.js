import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  AppBar,
  Button,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Profile from "../Profile/Profile";
import useStyles from "./Header.style";

const Header = ({ setOpenSide }) => {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickMenu = () => {
    setOpenSide((prev) => !prev);
  };

  const handleClickAccountCircle = (e) => {
    setOpenProfile(true);
    setAnchorEl(e.currentTarget);
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

        <Switch
          // checked={state.checkedB}
          // onChange={handleChange}
          color="default"
          inputProps={{ "aria-label": "theme", role: "input" }}
        />
        <Button
          aria-label="profile"
          color="inherit"
          onClick={handleClickAccountCircle}
        >
          <AccountCircleIcon fontSize="large" />
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
