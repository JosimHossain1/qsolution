import Image from "next/image";
import book from "@/assets/book.png";
import had from "@/assets/mortarboard.png";
import suitcase from "@/assets/black-suitcase.png";
import rocket from "../../../assets/rocket.png";

import videoRecord from "@/assets/home/banner-book.png";
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

      <div className="services-content mt-32">
        <h1 className=" text-2xl lg:text-4xl font-semibold mb-2 text-center text-white">
          কেনাে ব্যবহার করবেন <br />
          <span className="poppins text-fuchsia-400">Q. Solution?</span>
        </h1>

        <div className="card md:p-10 grid  grid-cols-2 lg:grid-cols-3 md:gap-8 text-center">
          <div className="bg-white rounded-md p-3">
            <Image src={videoRecord} alt="" className="mx-auto w-16  my-4" />
            <h1 className="text-2xl font-semibold my-1">সকল বই</h1>
            <p className="text-xl text-gray-500 bangla">
              ক্লাস ০১ থেকে ১২ পর্যন্ত এবং ডিপ্লোমা সকল ডিপার্টমেন্টের বই সমূহ
              পেয়ে যাবেন সহজেই।
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={exprience} alt="" className="mx-auto" />
            <h1 className="text-2xl font-semibold my-1">বোর্ড প্রশ্ন</h1>
            <p className="text-[20px] text-gray-500 bangla">
              <span className="text-[16px]">SSC, HSC, Admission, Diploma</span>{" "}
              সকল বোর্ডের প্রশ্ন ও উত্তর পেয়ে যাবে খুব সহজেই।
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={LiveClass} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">প্রশ্ন সার্চ</h1>
            <p className="text-[16px] text-gray-500">
              তোমার বইয়ের যে কোন প্রশ্ন লিখে সার্চ করলেই পেয়ে যাবে সেই প্রশ্নের
              উত্তর।
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={Sheet} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">লিখিত পরিক্ষা</h1>
            <p className="text-[16px] text-gray-500">
              পরিক্ষার বা যেকোন কোন সময় নিজেকে যাচাই করতে দিতে পারবে লিখিত
              পরিক্ষা।
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={LeaderBoard} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">MCQ পরিক্ষা</h1>
            <p className="text-[16px] text-gray-500">
              MCQ পরিক্ষা দিয়ে নিজেই নিজেকে যাচাই করতে পারবে।
            </p>
          </div>
          <div className="bg-white rounded-md p-3">
            <Image src={Questions} alt="" className="mx-auto" />
            <h1 className="text-xl font-semibold my-1">ক্লাস নোট</h1>
            <p className="text-[16px] text-gray-500">
              ক্লাস নোট হারানোর ভয় আর না। ক্লাসের সকল নোট নিয়ে নিতে পারবে সহজেই।
              নোট থেকে যাবে সারাজীবন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
