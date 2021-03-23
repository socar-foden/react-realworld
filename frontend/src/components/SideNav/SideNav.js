import {
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SwipeableDrawer,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { useHistory, useLocation } from "react-router";
import fp from "lodash/fp";
import { L_EN, L_KO } from "../../i18n";
import useStyles from "./SideNav.style";

const MenuList = [
  {
    text: "Main",
    icon: <HomeIcon color="primary" />,
    path: "/",
  },
  {
    text: "Account",
    icon: <SettingsIcon color="primary" />,
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

        <FormControl className={classes.formControl}>
          <Select
            label="language"
            value={L_EN}
            inputProps={{ "aria-label": "language" }}
          >
            <MenuItem value={L_EN}>English</MenuItem>
            <MenuItem value={L_KO}>한국어</MenuItem>
          </Select>
        </FormControl>
      </SwipeableDrawer>
    </nav>
  );
};

export default SideNav;
