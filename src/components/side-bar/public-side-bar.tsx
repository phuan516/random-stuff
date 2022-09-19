import React from "react";
import { CgProfile } from "react-icons/cg";

import PublicSideBarIcons from "./public-side-bar-icons";
import SideBarIcon from "./side-bar-icon";

const PublicSideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
      <PublicSideBarIcons />
      <SideBarIcon
        icon={<CgProfile size="18" />}
        text="Profile"
        link="/profile"
      />
    </div>
  );
};

export default PublicSideBar;
