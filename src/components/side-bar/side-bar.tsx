import React from "react";
import { useSession } from "next-auth/react";
import {
  AiOutlineBgColors,
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineUnorderedList,
  AiOutlineSetting,
} from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { adminEmail } from "../../lib/admin-email";
import GithubStatus from "./github-status";
import SideBarIcon from "./side-bar-icon";

const publicPages = [
  { link: "/", icon: <AiOutlineHome size="18" /> },
  { link: "/tools/color-picker", icon: <AiOutlineBgColors size="18" /> },
  { link: "/tools/invert-color", icon: <IoIosColorPalette size="18" /> },
];

const privatePages = [
  { link: "/todo", icon: <AiOutlineUnorderedList size="18" /> },
  { link: "/history", icon: <AiOutlineHistory size="18" /> },
  { link: "setting", icon: <AiOutlineSetting size="18" /> },
  { link: "profile", icon: <CgProfile size="18" /> },
];

const SideBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg"></div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
        <div>
          {publicPages.map((page) => (
            <SideBarIcon key={page.link} icon={page.icon} link={page.link} />
          ))}
        </div>
        <GithubStatus />
      </div>
    );
  }

  return (
    <div>
      {session.user.email === adminEmail ? (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
          <div>
            {publicPages.map((page) => (
              <SideBarIcon key={page.link} icon={page.icon} link={page.link} />
            ))}
            {privatePages.map((page) => (
              <SideBarIcon key={page.link} icon={page.icon} link={page.link} />
            ))}
          </div>
          <GithubStatus />
        </div>
      ) : (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
          <div>
            {publicPages.map((page) => (
              <SideBarIcon key={page.link} icon={page.icon} link={page.link} />
            ))}
          </div>
          <GithubStatus />
        </div>
      )}
    </div>
  );
};

export default SideBar;
