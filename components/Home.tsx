import React from "react";
import ssc from "../assets/ssc.png";
import hsc from "../assets/hsc.png";
import graduation from "../assets/graduation.png";
import medical from "../assets/medical.png";
import diploma from "../assets/diploma.png";
import madrasha from "../assets/madrasha.png";
import HomeCard from "./HomeCard";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="content-wrapper px-4 md:px-24 mt-16">
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-4 mt-5">
          <Link href={""}>
            <HomeCard
              icon={<Image src={ssc} alt="ssc" />}
              name="এস এস সি"
              des="২০১৫ সাল থেকে এই বছর পর্যন্ত এস এস সি এর সকল বোর্ড পরীক্ষার প্রশ্ন"
            />
          </Link>
          <Link href={""}>
            <HomeCard
              icon={<Image src={hsc} alt="hsc" />}
              name="এইচ এস সি"
              des="২০১৫ সাল থেকে এই বছর পর্যন্ত এইচ এস সি সকল বোর্ড পরীক্ষার প্রশ্ন"
            />
          </Link>
        </div>
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-4 mt-5">
          <HomeCard
            icon={<Image src={graduation} alt="admission" />}
            name="ভর্তি পরীক্ষা"
            des="২০১৫ সাল থেকে এই বছর পর্যন্ত বিশ্ববিদ্যালয় + গুচ্ছ + সাত কলেজের  ভর্তি পরীক্ষার  সকল প্রশ্ন"
          />
          <HomeCard
            icon={<Image src={medical} alt="medical" />}
            name="মেডিকেল পরীক্ষা"
            des="২০১৫ সাল থেকে এই বছর পর্যন্ত মেডিকেল পরীক্ষার সকল প্রশ্ন"
          />
        </div>
        <div className="md:flex md:space-x-6 md:space-y-0 space-y-4 mt-5">
          <HomeCard
            icon={<Image src={madrasha} alt="madrasha" />}
            name="মাদ্রাসা"
            des="২০১৫ সাল থেকে এই বছর পর্যন্ত মাদ্রাসার সকল বোর্ড পরীক্ষার প্রশ্ন"
          />
          <HomeCard
            icon={<Image src={diploma} alt="diploma" />}
            name="ডিপ্লোমা"
            des="২০১৫ সাল থেকে এই বছর পর্যন্ত ডিপ্লোমার সকল বোর্ড পরীক্ষার প্রশ্ন"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
