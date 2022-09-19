import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import PrivateSideBarIcons from "./private-side-bar-icons";
import PublicSideBarIcons from "./public-side-bar-icons";
import SideBarIcon from "./side-bar-icon";

const PrivateSideBar = () => {
  return (
    <div className="fixed z-50 top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
      <div>
        <PublicSideBarIcons />
        <PrivateSideBarIcons />
      </div>
      <div>
        <SideBarIcon
          icon={<CgProfile size="18" />}
          text="Profile"
          link="/profile"
        />
        <SideBarIcon
          icon={<AiOutlineSetting size="18" />}
          text="Setting"
          link="/setting"
        />
      </div>
    </div>
  );
};

export default PrivateSideBar;
