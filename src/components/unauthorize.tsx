import Link from "next/link";

const Unauthorize = () => {
  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">Unauthorized</h2>
          <p className="text-2xl font-semibold mb-3">
            Sorry, you have to sign in to view this page.
          </p>
          <Link href="/profile">
            <a
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Unauthorize;
