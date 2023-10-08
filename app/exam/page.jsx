import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-6">
      <Link
        href={"exam/mcq-exam"}
        className="bg-white px-6 py-3 text-2xl rounded-md font-semibold"
      >
        MCQ পরিক্ষা
      </Link>
      <Link
        href={"exam/written-exam"}
        className="bg-white px-6 py-3 text-2xl rounded-md font-semibold"
      >
        লিখিত পরিক্ষা
      </Link>
    </div>
  );
};

export default page;
