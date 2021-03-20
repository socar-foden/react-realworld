import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Account from "./Account/Account";
import useStyles from "./Layout.style";
import Main from "./Main/Main";

const Layout = () => {
  const [openSide, setOpenSide] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  const {
    user: { username },
  } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <>
      <Header setOpenSide={setOpenSide} />
      <SideNav open={openSide} setOpen={setOpenSide} />
      <main className={classes.root}>
        <BrowserRouter>
          <Switch location={location}>
            <Route path="/" exact>
              <Container maxWidth="sm">
                <Main />
              </Container>
            </Route>
            <Route path="/account">
              <Container className={classes.accountContainer}>
                <Account username={username} />
              </Container>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

export default Layout;
