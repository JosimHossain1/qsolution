import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Button from "../shared/Button";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-6  lg:px-24">
          <a href="/login" className="flex items-center">
            <Image
              src={logo}
              className="h-16 w-16 mr-3"
              alt="Q Solution Logo"
            />
          </a>
          <div className="flex md:order-2">
            <Link href="/login">
              <Button
                text={"লগইন"}
                design={"bg-blue-950 px-3 py-1 text-white text-xl rounded"}
              />
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/"
                  className="block text-xl  text-white bg-primary rounded md:bg-primary md:py-1 px-5"
                  aria-current="page"
                >
                  হোম
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="block py-2 text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  ক্লাস ১-১২
                </Link>
              </li> */}
              <li>
                <Link
                  href="/old-questions"
                  className="block py-2 text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  বোর্ড প্রশ্ন
                </Link>
              </li>
              <li>
                <Link
                  href="/exam"
                  className="block py-2 pl-3 text-xl pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  পরিক্ষা
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  পাঠ্য বই
                </Link>
              </li>
              <li>
                <Link
                  href="/notes"
                  className="block py-2  text-xl pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  ক্লাস নোট
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
