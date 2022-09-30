import React from "react";
import { AiOutlineBgColors, AiOutlineHome } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";

import SideBarIcon from "./side-bar-icon";

const PublicSideBarIcons = () => {
  return (
    <div>
      <SideBarIcon icon={<AiOutlineHome size="18" />} link="/" />
      <SideBarIcon
        icon={<AiOutlineBgColors size="18" />}
        link="/tools/color-picker"
      />
      <SideBarIcon
        icon={<IoIosColorPalette size="18" />}
        link="/tools/invert-color"
      />
    </div>
  );
};

export default PublicSideBarIcons;
