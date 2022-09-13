import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export default function Component() {
  const { data: session } = useSession();

  return (
    <div>
      {!session && (
        <>
          <span>You are not signed in</span>
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
          {session.user.image && (
            <span style={{ backgroundImage: `url('${session.user.image}')` }} />
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email ?? session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
