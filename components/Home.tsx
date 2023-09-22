import React from "react";
import ssc from "../assets/ssc.png";
import hsc from "../assets/hsc.png";
import graduation from "../assets/graduation.png";
import diploma from "../assets/diploma.png";
import HomeCard from "./HomeCard";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="content-wrapper px-4 md:px-24 mb-24">
        <div className="bg-gray-700 p-5 rounded w-[50%] mx-auto text-center text-white my-10">
          <h1 className=" text-4xl font-semibold">সকল বোর্ডের প্রশ্ন</h1>
          <p className=" text-lg">
            আপনার প্রয়োজনীয় সকল বোর্ডের প্রশ্ন রয়েছে। নিচের অপশন থেকে খুজে নিন।
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:space-x-6 md:space-y-0 space-y-4 mt-5">
          {/* SSC Card */}
          <div>
            <Link href={"/ssc"}>
              <HomeCard
                icon={<Image src={ssc} alt="ssc" />}
                name="এস এস সি (Not Available)"
                des="২০১৫ সাল থেকে এই বছর পর্যন্ত এস এস সি এর সকল বোর্ড পরীক্ষার প্রশ্ন"
              />
            </Link>
          </div>
          {/* HSC Card */}
          <div>
            <Link href={""}>
              <HomeCard
                icon={<Image src={hsc} alt="hsc" />}
                name="এইচ এস সি (Not Available)"
                des="২০১৫ সাল থেকে এই বছর পর্যন্ত এইচ এস সি সকল বোর্ড পরীক্ষার প্রশ্ন"
              />
            </Link>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:space-x-6 md:space-y-0 space-y-4 mt-5">
          {/* Diploma Card */}
          <div>
            <Link href={"diploma"}>
              <HomeCard
                icon={<Image src={diploma} alt="diploma" />}
                name="ডিপ্লোমা"
                des="২০১৫ সাল থেকে এই বছর পর্যন্ত ডিপ্লোমার সকল বোর্ড পরীক্ষার প্রশ্ন"
              />
            </Link>
          </div>
          <div>
            <Link href={""}>
              <HomeCard
                icon={<Image src={graduation} alt="admission" />}
                name="ভর্তি পরীক্ষা (Not Available)"
                des="২০১৫ সাল থেকে এই বছর পর্যন্ত বিশ্ববিদ্যালয় + গুচ্ছ + সাত কলেজের  ভর্তি পরীক্ষার  সকল প্রশ্ন"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
