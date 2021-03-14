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
        {fp.map(
          (settings) => (
            <>
              <ListItem button>
                <ListItemText
                  primary={settings.name}
                  onClick={settings.handleClick}
                  className={
                    fp.isEqual(settings.name, "DELETE") && classes.deleteButton
                  }
                />
              </ListItem>
              <Divider />
            </>
          ),
          settingsList
        )}
      </List>
    </Dialog>
  );
};

export default SettingsList;
