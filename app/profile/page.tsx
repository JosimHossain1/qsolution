import React from "react";
import userProfile from "@/assets/user.jpg";
import Image from "next/image";

const User = () => {
  return (
    <div className="md:flex justify-center items-center h-screen md:px-24 md:space-x-3">
      <div className="menuside md:w-[20%] p-4 rounded bg-[#76778255]">
        <div className="userProfile m-auto md:block hidden">
          <Image
            className="rounded-full m-auto w-[80px] h-[80px]"
            src={userProfile}
            alt="user"
          />
        </div>
        <ul className="mt-4 space-y-1">
          <li className="bg-white py-1 rounded px-3 font-semibold text-[#152a4b]">
            My Profile
          </li>
          <li className="hover:bg-white py-1 rounded px-3 font-semibold hover:text-[#152a4b] text-white">
            Total Exam
          </li>
          <li className="hover:bg-white py-1 rounded px-3 font-semibold hover:text-[#152a4b] text-white">
            Settings
          </li>
          <li className="hover:bg-white py-1 rounded px-3 font-semibold hover:text-[#152a4b] text-white">
            Pro
          </li>
        </ul>
      </div>

      <div className="detailsSide text-center md:text-left md:flex space-x-6 text-white py-[52px] px-4 mt-5 md:mt-0 md:w-[50%] rounded bg-[#76778255]">
        <div className="userProfile">
          <Image
            className="rounded-full m-auto w-[120px] h-[120px]"
            src={userProfile}
            alt="User"
          />
          <button className=" bg-white text-[#152a4b] font-semibold rounded p-1 mt-4 text-[14px]">
            Update Profile
          </button>
        </div>
        <div className="space-y-4">
          <h6>
            <span>Student ID</span> : OLDQ12W32
          </h6>
          <h6>
            <span>Student Name</span> : Josim hossain
          </h6>
          <h6>
            <span className="font-semibold">Phone</span> : 01303651288
          </h6>
          <h6>
            <span className="font-semibold">Email</span> :
            josimhossain842@gmail.com
          </h6>
        </div>
      </div>
    </div>
  );
};

export default User;
