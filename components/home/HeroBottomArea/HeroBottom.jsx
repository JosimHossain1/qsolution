import Image from "next/image";
import book from "@/assets/book.png";
import had from "@/assets/mortarboard.png";
import suitcase from "@/assets/black-suitcase.png";
import rocket from "../../../assets/rocket.png";

import videoRecord from "@/assets/Video lecture.svg";
import exprience from "@/assets/Exercise.svg";
import LiveClass from "@/assets/LIve Class.svg";
import Sheet from "@/assets/Lecture sheet.svg";
import LeaderBoard from "@/assets/Daily result and leaderboard.svg";
import Questions from "@/assets/ask question.svg";

const HeroBottom = () => {
  return (
    <div className="py-8 mt-32 ">
      <div className="title text-center mb-5 text-white">
        <h1 className=" text-2xl lg:text-4xl font-semibold mb-2">
          নিজের শেখা নিজেই গুছিয়ে <br /> নেয়ার যাত্রা শুরু হোক
        </h1>
        <p className="text-xl px-3 ">
          যেকোনো বিষয়ের যেকোনো টপিকে পড়ালেখা করতে চলে যাও তোমার পছন্দের সেকশনে
        </p>
      </div>
      <div className="card-content lg:px-24 ">
        <div className="card-wrapper bg-gray-100 rounded-md p-4 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex justify-evenly items-center">
            <Image
              src={book}
              width={50}
              height={50}
              alt="Picture of the author"
            />

            <p className="text-xl">ক্লাস ১- ১২</p>
          </div>
          <div className="flex justify-evenly items-center">
            <Image
              src={had}
              width={50}
              height={50}
              alt="Picture of the author"
            />

            <p className="text-xl">ভর্তি পরীক্ষা</p>
          </div>
          <div className="flex justify-evenly items-center">
            <Image
              src={suitcase}
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <p className="text-xl">চাকরি প্রস্তুতি</p>
          </div>
          <div className="flex justify-evenly items-center">
            <Image
              src={rocket}
              width={40}
              height={40}
              alt="Picture of the author"
            />

            <p className="text-xl">কোর্স সমূহ</p>
          </div>
        </div>
      </div>

      <div className="services-content lg:px-24">
        <div className="card md:p-10 grid  grid-cols-2 lg:grid-cols-3 md:gap-8 text-center">
          <div className="bg-white rounded-md p-3">
            <Image src={videoRecord} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">ভিডিও লেকচার</h1>
            <p className="text-[16px] text-gray-500">
              শেখো নিজের ইচ্ছেমতো, পেয়ে যাও ২০ হাজারেরও বেশি ভিডিও লেকচার
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={exprience} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">সুবিধামত অনুশীলন</h1>
            <p className="text-[16px] text-gray-500">
              অনুশীলন করো সুবিধামত সময়ে, মুহূর্তেই দেখে নাও তোমার স্কোর
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={LiveClass} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">লাইভ ক্লাস</h1>
            <p className="text-[16px] text-gray-500">
              দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজাও রাখো রুটিনমাফিক পড়াশোনা
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={Sheet} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">লেকচার শীট</h1>
            <p className="text-[16px] text-gray-500">
              নিমিষেই পেয়ে যাও সহায়ক লেকচার শীট এবং ইন্টার‍্যাক্টিভ বই
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={LeaderBoard} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">দৈনিক লিডারবোর্ড</h1>
            <p className="text-[16px] text-gray-500">
              শেখার প্রতিযোগিতায় বন্ধুদের মাঝে নিজের অবস্থান দেখো লিডারবোর্ডে
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={Questions} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">প্রশ্ন করো মন খুলে</h1>
            <p className="text-[16px] text-gray-500">
              তোমার যেকোনো জিজ্ঞাসায় পাচ্ছো এক্সপার্ট গাইডলাইন এক প্ল্যাটফর্মেই
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
