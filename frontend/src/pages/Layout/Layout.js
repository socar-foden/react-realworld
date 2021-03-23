import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Account from "./Account/Account";
import useStyles from "./Layout.style";
import Main from "./Main/Main";
import NotFound from "./NotFound/NotFound";
import Profile from "./Profile/Profile";

const Layout = () => {
  const [openSide, setOpenSide] = useState(false);
  const classes = useStyles();
  const {
    user: { username },
  } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <>
      <Header setOpenSide={setOpenSide} />
      <SideNav open={openSide} setOpen={setOpenSide} />
      <main className={classes.root}>
        <Switch>
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
          <Route path="/profile/:username">
            <Container className={classes.accountContainer}>
              <Profile />
            </Container>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Layout;
