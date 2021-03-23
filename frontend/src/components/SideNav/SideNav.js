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
import { useDispatch, useSelector } from "react-redux";
import { L_EN, L_KO } from "../../i18n";
import { uiActions } from "../../reducers/ui/uiReducer";
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
  const { language } = useSelector((rootReducer) => rootReducer.uiReducer);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleClickListItem = fp.curry((path, e) => {
    history.push(path);
    setOpen(false);
  });

  const handleChangeLanguage = (e) => {
    dispatch(
      uiActions.CHANGE_LANGUAGE({
        language: e.target.value,
      })
    );
  };

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
            value={language}
            inputProps={{ "aria-label": "language" }}
            onChange={handleChangeLanguage}
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
