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
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import fp from "lodash/fp";
import { uiActions } from "../../reducers/ui/uiReducer";
import { DARK_THEME, LIGHT_THEME } from "../App.style";
import Profile from "../Profile/Profile";
import useStyles from "./Header.style";

const Header = ({ setOpenSide }) => {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { themeName } = useSelector((rootReducer) => rootReducer.uiReducer);
  const [checked, setChecked] = useState(!fp.isEqual(themeName, LIGHT_THEME));
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    setOpenSide((prev) => !prev);
  };

  const handleClickAccountCircle = (e) => {
    setOpenProfile(true);
    setAnchorEl(e.currentTarget);
  };

  const handleChangeTheme = () => {
    setChecked(fp.negate(fp.identity));
    dispatch(
      uiActions.CHANGE_THEME({
        themeName: checked ? LIGHT_THEME : DARK_THEME,
      })
    );
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
          checked={checked}
          onChange={handleChangeTheme}
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
