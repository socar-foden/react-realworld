import { AppBar, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import fp from "lodash/fp";
import Article from "../Article/Article";
import useStyles from "./AccountContents.style";

const AccountContents = ({ articles = [], feeds = [] }) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();
  const {
    userReducer: { user },
    profileReducer: { profile },
  } = useSelector(fp.identity);

  const handleChangeTab = (e, newIndex) => {
    setIndex(newIndex);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={index}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          centered
        >
          <Tab label="Articles" />
          {fp.isEqual(user.username, profile.username) && <Tab label="Feeds" />}
        </Tabs>
      </AppBar>

      <Grid container className={classes.gridList}>
        {fp.map(
          (item) => (
            <Grid key={item.slug} item md={3}>
              <Article article={item} />
            </Grid>
          ),
          fp.isEqual(index, 0) ? articles : feeds
        )}
      </Grid>
    </>
  );
};

export default AccountContents;
