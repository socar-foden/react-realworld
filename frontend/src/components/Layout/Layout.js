import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header role="banner"></header>
      <nav aria-label="side-nav"></nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
