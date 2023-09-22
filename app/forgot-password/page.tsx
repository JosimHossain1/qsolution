import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-white rounded w-[90%] md:w-[40%] h-auto p-8">
        <h1 className="text-center font-semibold text-2xl">
          পাসওয়ার্ড পরিবর্তন করুন
        </h1>
        <form action="" className="my-4 space-y-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="মোবাইল নাম্বার"
            className="border w-full p-2 rounded text-xl"
          />
          <input
            type="submit"
            name=""
            id=""
            value="পাসওয়ার্ড পরিবর্তন"
            className="border w-full p-2 rounded bg-blue-600 text-2xl text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
