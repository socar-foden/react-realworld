import { AppBar, Grid, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import fp from "lodash/fp";
import loadable from "@loadable/component";
import useStyles from "./AccountContents.style";
const Article = loadable(() => import("../Article/Article"));
const IntersectionObserver = loadable(() =>
  import("../IntersectionObserver/IntersectionObserver")
);

const AccountContents = ({ profile = {}, contents = [] }) => {
  const [index, setIndex] = useState(0);
  const classes = useStyles();

  const handleChangeTab = (e, newIndex) => {
    setIndex(newIndex);
  };

  const target = contents[index];

  useEffect(() => {
    setIndex(0);
  }, [profile]);

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
          {fp.map(
            (item) => item.pred && <Tab key={item.name} label={item.name} />,
            contents
          )}
        </Tabs>
      </AppBar>

      <Grid container className={classes.gridList}>
        {fp.map(
          (item) => (
            <Grid key={item.slug} item md={4}>
              <Article article={item} />
            </Grid>
          ),
          target.list
        )}

        {!fp.isEmpty(target.list) && target.count > target.list.length && (
          <IntersectionObserver next={() => target.next(target.list.length)} />
        )}
      </Grid>
    </>
  );
};

export default AccountContents;
