import React from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaYoutubeSquare, FaTiktok } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  const company = [
    { items: "ডিপ্লোমা" },
    { items: "একাদশ-দ্বাদশ" },
    { items: "নবম-দশম" },
    { items: "১ম-৮ম শ্রেণী" },
  ];

  const others = [
    { items: "নোটস" },
    { items: "ব্লগ" },
    { items: "প্রাইভেসি পলিসি" },
    { items: "আমাদের সম্পর্কে" },
  ];

  const social = [
    { name: <AiFillFacebook /> },
    { name: <AiFillInstagram /> },
    { name: <AiFillLinkedin /> },
    { name: <FaYoutubeSquare /> },
    { name: <FaTiktok /> },
  ];

  return (
    <>
      <div className="px-4 md:px-10 lg:px-16 xl:24 bg-white text-gray-500">
        <div className="grid md:grid-cols-3 py-10 gap-10">
          <div className="">
            <Link href={"/"}>
              <Image className="w-[30%] " src={logo} alt="Logo" />
            </Link>
            <p>
              স্মার্ট একটি প্লাটফর্মে পড়াশোনা করো স্মার্ট ভাবে। লাগবে না কোন বই,
              নিতে হবে না খাতায় নোট, খুজতে হবে না বোর্ড প্রশ্ন, সব কিছু পেয়ে
              যাবে এক সাথে।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="">
              <h1 className="text-xl mb-10 text-black"> বই সমূহ</h1>
              {company.map((item) => (
                <li
                  className="list-none text-[17px] mb-2 hover:text-black cursor-pointer"
                  key={item.items}
                >
                  {item.items}
                </li>
              ))}
            </div>

            <div className="">
              <h1 className="text-xl mb-6 text-black">অন্যান্য</h1>
              {others.map((item) => (
                <li
                  className="list-none text-[17px] text-gray-500 hover:text-black cursor-pointer"
                  key={item.items}
                >
                  {item.items}
                </li>
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="mb-6 text-xl text-black">যোগাযোগ</h3>
            <ul className="text-[17px] bangla">
              <li>মোবাইল: ০১৩০৩৬৫১২৮৮</li>
              <li>ঠিকানা: ধানমন্ডি-৩২, ঢাকা </li>
              <li>
                ইমেইল:{" "}
                <span className="poppins text-[15px]">
                  q.solution.official@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="lg:flex justify-between items-center border-t-2 bg-white px-6 md:px-10 lg:px-24 py-5 space-y-4">
        <p className="text-center text-gray-500">
          স্বত্ব © ২০২৩ কিউ সলিশন স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
        </p>
        <div className="social flex justify-center items-center space-x-3 md:mt-5">
          {social.map((item, index) => (
            <span className="text-xl text-black cursor-pointer" key={index}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Footer;
