import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Button from "../shared/Button";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white fixed w-full top-0 left-0 border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between  py-2 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                className="h-12 w-12 mr-1"
                alt="Q Solution Logo"
              />
            </Link>
          </div>

          <div>
            <ul className="font-medium space-x-4 md:space-x-8 text-black flex">
              <Link href="/" className="text-md rounded md:bg-primary">
                হোম
              </Link>

              <Link
                href="/old-questions"
                className="text-md rounded md:bg-primary"
              >
                বোর্ড প্রশ্ন
              </Link>

              <Link href="/exam" className="text-md rounded md:bg-primary">
                পরিক্ষা
              </Link>

              <Link href="/books" className="text-md rounded md:bg-primary">
                পাঠ্য বই
              </Link>

              <Link href="/notes" className="text-md rounded md:bg-primary">
                ক্লাস নোট
              </Link>
            </ul>
          </div>

          <div>
            <Link href="/login">
              <Button
                text={"লগইন"}
                design={"bg-blue-950 px-2 py-1 text-white text-sm rounded"}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
