import React from "react";
import { useSession } from "next-auth/react";

import PublicSideBar from "./public-side-bar";
import PrivateSideBar from "./private-side-bar";
import { adminEmail } from "../../lib/admin-email";

const SideBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg"></div>
    );
  }

  if (status === "unauthenticated") {
    return <PublicSideBar />;
  }

  return (
    <div>
      {session.user.email === adminEmail ? (
        <PrivateSideBar />
      ) : (
        <PublicSideBar />
      )}
    </div>
  );
};

export default SideBar;
