import React from "react";
import { Route, Switch } from "react-router";
import Header from "../../components/Header/Header";
import Main from "./Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <nav aria-label="side-nav"></nav>
      <main>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default Layout;
