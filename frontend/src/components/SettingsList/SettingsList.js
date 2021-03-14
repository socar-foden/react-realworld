import {
  Dialog,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import fp from "lodash/fp";
import useStyles from "./SettingsList.style";

const SettingsList = ({ settingsList = [], open, handleClose = () => {} }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <List>
        {fp.flow(
          fp.entries,
          fp.map(([index, settings]) => (
            <li key={settings.name}>
              <ListItem button>
                <ListItemText
                  primary={settings.name}
                  onClick={settings.handleClick || function () {}}
                  className={
                    fp.isEqual(settings.name, "DELETE")
                      ? classes.deleteButton
                      : ""
                  }
                />
              </ListItem>
              {!fp.isEqual(fp.toNumber(index), settingsList.length - 1) && (
                <Divider />
              )}
            </li>
          ))
        )(settingsList)}
      </List>
    </Dialog>
  );
};

export default SettingsList;
