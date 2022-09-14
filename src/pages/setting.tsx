import React from "react";
import { useSession } from "next-auth/react";

import LabelSetting from "../components/settings/label-settings/label-settings";
import { adminEmail } from "../lib/admin-email";
import Unauthorize from "../components/unauthorize";
import AccessDenied from "../components/access-denied";

const Setting = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <Unauthorize />;
  }

  return (
    <>
      {session.user.email === adminEmail ? <LabelSetting /> : <AccessDenied />}
    </>
  );
};
export default Setting;
