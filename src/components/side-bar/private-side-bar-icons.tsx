import React from "react";
import { AiOutlineHistory, AiOutlineUnorderedList } from "react-icons/ai";

import SideBarIcon from "./side-bar-icon";

const PublicSideBarIcons = () => {
  return (
    <div>
      <SideBarIcon
        icon={<AiOutlineUnorderedList size="18" />}
        text="Todo"
        link="/todo"
      />
      <SideBarIcon
        icon={<AiOutlineHistory size="18" />}
        text="History"
        link="history"
      />
    </div>
  );
};

export default PublicSideBarIcons;

//setting

//history
