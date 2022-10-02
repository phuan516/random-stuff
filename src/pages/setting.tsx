import React from "react";
import { useSession } from "next-auth/react";

import LabelSetting from "../components/label-settings";
import { adminEmail } from "../lib/admin-email";
import Unauthorize from "../components/unauthorize";
import AccessDenied from "../components/access-denied";
import Layout from "../components/layout";

const Setting = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <Unauthorize />
      </Layout>
    );
  }

  return (
    <Layout>
      {session.user.email === adminEmail ? <LabelSetting /> : <AccessDenied />}
    </Layout>
  );
};
export default Setting;
