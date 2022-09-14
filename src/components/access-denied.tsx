import Link from "next/link";
import React from "react";

const AccessDenied = () => {
  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">Access Denied</h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, you don&apos;t have access to this page.
          </p>
          <p className="mt-4 mb-8 ">
            But don&apos;t worry, you can find plenty of other things on our
            other pages.
          </p>
          <Link href="/">
            <a
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              homepage
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccessDenied;
