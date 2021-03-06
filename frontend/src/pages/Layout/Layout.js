import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "./Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <nav aria-label="side-nav"></nav>
      <main>
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
