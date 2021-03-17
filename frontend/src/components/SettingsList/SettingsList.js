import {
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import fp from "lodash/fp";
import useStyles from "./SettingsList.style";

const SettingsList = ({
  settingsList = [],
  open,
  handleClose = fp.noop,
  title,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}

      <List>
        {fp.flow(
          fp.entries,
          fp.map(([index, settings]) => (
            <li key={settings.name}>
              <ListItem button onClick={settings.handleClick || fp.noop}>
                <ListItemText
                  primary={settings.name}
                  className={clsx({
                    [classes.deleteButton]: fp.isEqual(settings.name, "DELETE"),
                    [classes.item]: true,
                  })}
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
