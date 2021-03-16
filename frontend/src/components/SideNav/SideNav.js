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
import { useHistory, useLocation } from "react-router";
import fp from "lodash/fp";
import useStyles from "./SideNav.style";

const MenuList = [
  {
    text: "Main",
    icon: <HomeIcon color="primary" />,
    path: "/",
  },
  {
    text: "Friends",
    icon: <SupervisorAccountIcon color="primary" />,
    path: "/friends",
  },
  {
    text: "Account",
    icon: <PermIdentityIcon color="primary" />,
    path: "/account",
  },
];

const SideNav = ({ open, setOpen }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  // eslint-disable-next-line no-unused-vars
  const handleClickListItem = fp.curry((path, e) => {
    history.push(path);
    setOpen(false);
  });

  return (
    <nav aria-label="side-nav">
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={fp.noop}
        role="navigation"
        aria-label="side-nav"
      >
        <List className={classes.list}>
          {MenuList.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={handleClickListItem(item.path)}
              selected={fp.isEqual(location.pathname, item.path)}
            >
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
