import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center  py-2 border-b border-b-slate-600 gap-4">
      <Link
        href={"/posts"}
        className="text-3xl font-extrabold hover:ring-4 hover:ring-slate-500 p-4 rounded-xl duration-200"
      >
        Posts
      </Link>
      <Link
        href={"/users"}
        className="text-3xl font-extrabold hover:ring-4 hover:ring-slate-500 p-4 rounded-xl  duration-200"
      >
        Users
      </Link>
    </header>
  );
};

export default Header;
