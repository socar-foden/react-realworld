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
import { useTranslation } from "react-i18next";
import fp from "lodash/fp";
import { DELETE, UNFOLLOW } from "../../i18n/constants";
import useStyles from "./SettingsList.style";

const SettingsList = ({
  settingsList = [],
  open,
  handleClose = fp.noop,
  title,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      {title && <DialogTitle>{title}</DialogTitle>}

      <List className={classes.list}>
        {fp.flow(
          fp.entries,
          fp.map(([index, settings]) => (
            <li key={settings.name}>
              <ListItem
                disabled={settings.disabled}
                button
                onClick={settings.handleClick || fp.noop}
              >
                <ListItemText
                  primary={settings.name}
                  className={clsx({
                    [classes.deleteButton]: fp.find(fp.isEqual(settings.name), [
                      t(DELETE),
                      t(UNFOLLOW),
                    ]),
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
