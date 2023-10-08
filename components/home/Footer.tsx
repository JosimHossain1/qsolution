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
      <div className="px-10 md:px-10 lg:px-20 mt-32 bg-white">
        <div className="lg:grid lg:grid-cols-4 py-10">
          <div className="">
            <Link href={"/"}>
              <Image
                className="w-[30%] lg:w-[50%] mb-5"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="">
            <h1 className="text-xl md:mb-5"> বই সমূহ</h1>
            {company.map((item) => (
              <li
                className="list-none text-[17px] mb-2 text-gray-500 hover:text-black cursor-pointer"
                key={item.items}
              >
                {item.items}
              </li>
            ))}
          </div>

          <div className="">
            <h1 className="text-xl mt-3 md:mt-0 md:mb-5">অন্যান্য</h1>
            {others.map((item) => (
              <li
                className="list-none text-[17px] text-gray-500 hover:text-black cursor-pointer"
                key={item.items}
              >
                {item.items}
              </li>
            ))}
          </div>

          <div className="">
            <h3 className="mb-3 text-xl">যোগাযোগ</h3>
            <ul className="text-[17px] font-[arial]">
              <li>Contact: +880130361288</li>
              <li>Location: Dhanmondi, Dhaka </li>
              <li>Email: q.solution.official@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 bg-white px-6 md:px-10 lg:px-24">
        <p className="text-center text-gray-500 py-10">
          স্বত্ব © ২০২৩ কিউ সলিশন স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
        </p>
        <div className="social flex space-x-3 mt-5">
          {social.map((item, index) => (
            <span
              className="text-2xl text-black rounded p-[5px] cursor-pointer"
              key={index}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default Footer;
