import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import React from "react";
import useStyles from "./SideNav.style";

const MenuList = [
  {
    text: "Main",
    icon: <HomeIcon />,
  },
  {
    text: "Friends",
    icon: <SupervisorAccountIcon />,
  },
  {
    text: "Account",
    icon: <PermIdentityIcon />,
  },
];

const SideNav = ({ open, setOpenSide }) => {
  const classes = useStyles();

  return (
    <nav aria-label="side-nav">
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpenSide(false)}
        onOpen={() => {}}
        role="navigation"
        aria-label="side-nav"
      >
        <List className={classes.list}>
          {MenuList.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </nav>
  );
};

export default SideNav;
