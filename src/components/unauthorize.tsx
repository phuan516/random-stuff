import { signIn } from "next-auth/react";

import SideBar from "../components/side-bar/side-bar";

const Unauthorize = () => {
  return (
    <>
      <SideBar />
      <section className="flex items-center h-full p-16 ml-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="text-center">
            <h2 className="mb-8 font-extrabold text-9xl ">Unauthorized</h2>
            <p className="text-2xl font-semibold mb-3">
              Sorry, you have to sign in to view this page.
            </p>
            <a
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unauthorize;
