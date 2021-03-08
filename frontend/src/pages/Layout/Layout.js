import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import useStyles from "./Layout.style";
import Main from "./Main/Main";

const Layout = () => {
  const [openSide, setOpenSide] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Header setOpenSide={setOpenSide} />
      <SideNav open={openSide} setOpen={setOpenSide} />
      <main className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

export default Layout;
