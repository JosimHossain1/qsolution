import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 bg-white text-xl rounded w-[50%] leading-10 font-semibold">
        <h1 className="text-center text-3xl border-b-4 border-gray-500 w-[100px] mx-auto mb-3">
          রেজাল্ট
        </h1>
        <h1 className="text-green-500">সঠিক উত্তর : ১৩ টি</h1>
        <h1 className="text-red-500">ভুল উত্তর : ০২ টি</h1>
        <h1>সর্বমোট নাম্বার : ১৩</h1>
        <h1>রেজাল্ট : পাস </h1>
      </div>
    </div>
  );
};

export default page;
