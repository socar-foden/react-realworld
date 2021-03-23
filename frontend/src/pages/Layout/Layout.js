import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router";
import SideNav from "../../components/SideNav/SideNav";
import useStyles from "./Layout.style";
const Header = loadable(() => import("../../components/Header/Header"));
const Account = loadable(() => import("./Account/Account"));
const Main = loadable(() => import("./Main/Main"));
const NotFound = loadable(() => import("./NotFound/NotFound"));
const Profile = loadable(() => import("./Profile/Profile"));

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
