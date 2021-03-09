import { Container } from "@material-ui/core";
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
        <Container maxWidth="sm">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
            </Switch>
          </BrowserRouter>
        </Container>
      </main>
    </>
  );
};

export default Layout;
