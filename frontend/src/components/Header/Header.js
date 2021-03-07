import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Profile from "../Profile/Profile";
import useStyles from "./Header.style";

const Header = ({ setOpenSide }) => {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenuIcon = () => {
    setOpenSide((prev) => !prev);
  };

  const handleAccountCircleIcon = (e) => {
    setOpenProfile(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <AppBar position="static" role="banner">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClickMenuIcon}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          RealWorld
        </Typography>
        <Button color="inherit">
          <AccountCircleIcon onClick={handleAccountCircleIcon} />
          <Profile
            open={openProfile}
            setOpen={setOpenProfile}
            anchorEl={anchorEl}
          />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
