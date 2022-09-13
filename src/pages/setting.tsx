import React from "react";
import { useSession } from "next-auth/react";

import LabelSetting from "../components/settings/label-settings/label-settings";
import { adminEmail } from "../lib/admin-email";

const Setting = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Sign in to view this page</p>;
  }

  return (
    <>
      {session.user.email === adminEmail ? (
        <LabelSetting />
      ) : (
        <p>Access Denied</p>
      )}
    </>
  );
};
export default Setting;
