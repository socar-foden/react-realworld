import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideNav from "../../components/SideNav/SideNav";
import Main from "./Main/Main";

const Layout = () => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <Header setOpenSide={setOpenSide} />
      <SideNav open={openSide} setOpenSide={setOpenSide} />
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
