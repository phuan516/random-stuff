import React from "react";

import PublicSideBarIcons from "./public-side-bar-icons";
import GithubStatus from "./github-status";

const PublicSideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
      <PublicSideBarIcons />
      <GithubStatus />
    </div>
  );
};

export default PublicSideBar;
