import React from "react";
import {
  HomeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div
        className="footer-manu flex justify-center items-end
        fixed w-screen bottom-0 px-6 z-50"
      >
        <div className="bar flex justify-between mb-7 space-x-3 bg-white px-5 py-2 rounded md:w-[675px] w-screen shadow-lg">
          <Link href={"/wishlist"}>
            <HeartIcon className="w-6 cursor-pointer hover:text-sky-600 " />
          </Link>
          <Link href={"/search"}>
            <MagnifyingGlassIcon className="w-6 cursor-pointer hover:text-sky-600" />
          </Link>
          <Link href={"/"}>
            <HomeIcon className="w-6 cursor-pointer hover:text-sky-600" />
          </Link>
          <Link href={"/exam"}>
            <BookOpenIcon className="w-6 cursor-pointer hover:text-sky-600" />
          </Link>
          <Link href={"/profile"}>
            <UserCircleIcon className="w-6 cursor-pointer hover:text-sky-600" />
          </Link>
          <Link href={"/q"}>
            <UserCircleIcon className="w-6 cursor-pointer hover:text-sky-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
