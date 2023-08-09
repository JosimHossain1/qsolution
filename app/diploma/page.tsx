import Link from "next/link";
import React from "react";

const ssc = () => {
  const departments = [
    "কম্পিউটার",
    "গ্রাফিক্স ডিজাইন",
    "সিভিল ইঞ্জিনিয়ারিং",
    "ইলেক্ট্রিক্যাল ইঞ্জিনিয়ারিং",
    "আর্কিটেকচার ইঞ্জিনিয়ারিং",
    "টেলি-কমিনিকেশন ইঞ্জিনিয়ারিং",
    "টেক্সট-টাইল ইঞ্জিনিয়ারিং",
    // "গার্মেন্টস ডিজাইন এন্ড প্যাটার্ন",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen my-32 sm:my-16 ">
      <h1 className="text-white text-3xl border-b-4 mb-4">
        ডিপার্টমেন্ট নির্বাচন করুন
      </h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3">
        {departments.map((department, index) => (
          <Link
            href={`/diploma/${index}`}
            key={index}
            className="border bg-gray-300 hover:bg-gray-100 p-2 text-2xl rounded text-center cursor-pointer m-6"
          >
            <p className="text-black">{department}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ssc;
