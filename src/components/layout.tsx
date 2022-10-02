import React from "react";

import SideBar from "./side-bar/side-bar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div className="ml-16">{children}</div>
    </div>
  );
};

export default Layout;
