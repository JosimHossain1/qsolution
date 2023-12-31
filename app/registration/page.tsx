import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-white rounded w-[90%] md:w-[40%] h-auto p-8">
        <h1 className="text-center font-semibold text-2xl">
          একাউন্ট তৈরি করুন
        </h1>
        <form action="" className="my-4 space-y-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="নাম"
            className="border w-full p-2 rounded text-xl"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="মোবাইল নাম্বার"
            className="border w-full p-2 rounded text-xl"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="পাসওয়ার্ড"
            className="border w-full p-2 rounded text-xl"
          />
          <input
            type="submit"
            name=""
            id=""
            value="একাউন্ট করুন"
            placeholder="মোবাইল নাম্বার"
            className="border w-full p-2 rounded bg-blue-600 text-2xl text-white cursor-pointer"
          />
        </form>
        <div>
          <Link href={"/login"} className="cursor-pointer underline">
            লগ-ইন করুন
          </Link>
        </div>
        <div className=" space-x-4">
          <button className="border md:w-[48%]  p-2 rounded bg-red-600 text-2xl text-white cursor-pointer poppins my-4">
            Google
          </button>
          <button className="border md:w-[48%] p-2 rounded bg-blue-600 text-2xl text-white cursor-pointer poppins">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
