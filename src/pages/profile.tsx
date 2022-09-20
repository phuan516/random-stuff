import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

import SideBar from "../components/side-bar/side-bar";

export default function Component() {
  const { data: session } = useSession();

  return (
    <div>
      <SideBar />
      {!session && (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                You are not signed in
              </h2>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}
      {session?.user && (
        <>
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Signed in as
                  <br />
                  <strong>{session.user.email ?? session.user.name}</strong>
                </h2>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
          <pre className="ml-20">{JSON.stringify(session, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
