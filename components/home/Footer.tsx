import React from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaYoutubeSquare, FaTiktok } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
  const company = [
    { items: "ক্যারিয়ার" },
    { items: "প্রাইভেসি পলিসি" },
    { items: "রিফান্ড পলিসি" },
  ];

  const others = [
    { items: "নোটস এবং গাইডস" },
    { items: "ব্লগ" },
    { items: "অ্যাফিলিয়েট হতে চাইলে" },
    { items: "ক্র্যাশ কোর্স" },
  ];

  const social = [
    { name: <AiFillFacebook /> },
    { name: <AiFillInstagram /> },
    { name: <AiFillLinkedin /> },
    { name: <FaYoutubeSquare /> },
    { name: <FaTiktok /> },
  ];

  return (
    <div className="px-10 md:px-10 lg:px-20 mt-32 bg-transparent">
      <div className=" lg:grid lg:grid-cols-12 py-20">
        <div className=" md:col-span-3 lg:col-span-4">
          <Image
            className=" w-[30%] lg:w-[50%] mb-5 cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className=" md:col-span-3 lg:col-span-2">
          <h1 className="text-xl md:mb-5"> কোম্পানি </h1>
          {company.map((item) => (
            <li
              className="list-none text-[17px] text-gray-500 hover:text-black cursor-pointer"
              key={item.items}
            >
              {item.items}
            </li>
          ))}
        </div>
        <div className="md:col-span-3 lg:col-span-2">
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
        <div className=" md:col-span-3 lg:col-span-4">
          <h3 className="mb-3 text-xl">সামাজিক যোগাযোগ মাধ্যমে আমরা</h3>
          <ul className="text-[17px] font-[arial]">
            <li>
              <b>Contact:</b> +88013036*****
            </li>
            <li>
              <b>Location:</b> Dhanmondi, Dhaka{" "}
            </li>
            <li>
              <b>Email:</b>{" "}
              <span className="text-blue-950">
                q.solution.official@gmail.com
              </span>
            </li>
          </ul>
          <div className="social flex space-x-3 mt-5">
            {social.map((item, index) => (
              <span
                className="text-2xl bg-gray-800 text-white rounded p-[5px] cursor-pointer"
                key={index}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 py-10">
        স্বত্ব © ২০২৩ কিউ সলিশন স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত
      </p>
    </div>
  );
};
export default Footer;
