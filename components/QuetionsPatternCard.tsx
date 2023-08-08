"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const QuetionsPatternCard = () => {
  const mcqData = [
    {
      Quetion: "১. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "a",
      answare: 2,
    },
    {
      Quetion: "২. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "b",
      answare: 2,
    },
    {
      Quetion: "৩. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "c",
      answare: 2,
    },
    {
      Quetion: "৪. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "d",
      answare: 2,
    },
    {
      Quetion: "৫. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "e",
      answare: 2,
    },
    {
      Quetion: "৬. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "f",
      answare: 2,
    },
    {
      Quetion: "৭. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "g",
      answare: 2,
    },
    {
      Quetion: "৮. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "h",
      answare: 2,
    },
    {
      Quetion: "৯. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "i",
      answare: 2,
    },
    {
      Quetion: "১১. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "j",
      answare: 2,
    },
    {
      Quetion: "১২. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "k",
      answare: 2,
    },
    {
      Quetion: "১৩. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "l",
      answare: 2,
    },
    {
      Quetion: "১৪. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "m",
      answare: 2,
    },
    {
      Quetion: "১৫. ইস, ঠাণ্ডা যেন বরফ— কোন অর্থে অব্যয়ের প্রয়োগ হয়েছে?",
      options: ["ক. তুলনায়", "খ. অনুমানে", "গ. উপমায়", "ঘ. বিস্ময়ে"],
      name: "n",
      answare: 2,
    },
  ];

  const initialTime = 15 * 60; // 15 minutes in seconds
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
    setHide(true);
  };

  const endExam = () => {
    alert("আপনি কি পরীক্ষা শেষ করতে চাচ্ছেন?");
  };

  return (
    <div className="bg-gray-100 lg:px-24 text-center p-6 kalpurush pb-16">
      <div className="flex justify-between items-center shadow-md p-2 ">
        {
          <button
            onClick={handleStart}
            className={`text-[14px] poppins border rounded py-1 px-2 bg-green-500 mx-auto  text-white ${
              hide ? "hidden" : "block"
            }`}
          >
            পরীক্ষা শুরু করুন
          </button>
        }
        <h2
          className={`text-[14px] poppins border rounded py-1 px-2 bg-red-500 text-white ${
            hide ? "block" : "hidden"
          }`}
        >
          Timer: {Math.floor(time / 60)}:
          {(time % 60).toString().padStart(2, "0")}
        </h2>

        <Link
          href={"/result"}
          className={`text-[14px] poppins border rounded py-1 px-2 bg-red-500 text-white ${
            hide ? "block" : "hidden"
          }`}
          onClick={endExam}
        >
          পরিক্ষা শেষ
        </Link>
      </div>

      <div className=" border border-black p-6 rounded mt-10">
        <div className="qHeading">
          <div>
            <h1 className=" text-2xl lg:text-4xl font-bold">
              এস এস সি ঢাকা বোর্ড - ২০১৯
            </h1>
            <h1 className="text-xl lg:text-3xl md:my-2">বাংলা দ্বিতীয় পত্র</h1>
            <h1 className="lg:text-xl md:my-1">বহুনির্বাচনি অভীক্ষা</h1>
          </div>
          <div className="timeBar flex justify-between">
            <div className="font-semibold">সময় -- ১৫ মিনিট</div>
            <div className="font-semibold">পূর্ণমান -- ১৫</div>
          </div>
          <div className="qNotes my-3 lg:px-[10%]">
            <p className="lg:text-lg">
              বিশেষ দ্রষ্টব্য: সরবরাহকৃত নৈর্ব্যক্তিক অভীক্ষার উত্তরপত্রে
              প্রশ্নের ক্রমিক নম্বরের বিপরীতে প্রদত্ত বর্ণসম্বলিত বৃত্তসমূহ হতে
              সঠিক/সর্বোৎকৃষ্ট উত্তরের বৃত্তটি বল পয়েন্ট কলম দ্বারা সম্পূর্ণ
              ভরাট করো। প্রতিটি প্রশ্নের মান ১।
            </p>
          </div>
        </div>

        <div className="quetionBody text-left mt-10 ">
          <div className="grid md:grid-cols-2">
            {mcqData.map((data) => (
              <div className="questionPart" key={data.Quetion}>
                <h6 className="Question text-[17px] font-semibold mt-4">
                  {data.Quetion}
                </h6>
                <div className="multipla_choice flex justify-between">
                  <div className="space-y-4 mt-4">
                    <label htmlFor="" className="flex space-x-3">
                      <input
                        type="radio"
                        name={data.name}
                        value={data.options[0]}
                      />
                      <p className="text-[17px]">{data.options[0]}</p>
                    </label>
                    <label htmlFor="" className="flex space-x-3">
                      <input
                        type="radio"
                        name={data.name}
                        value={data.options[2]}
                      />
                      <p className="text-[17px]">{data.options[2]}</p>
                    </label>
                  </div>
                  <div className="space-y-4 mt-4 ">
                    <label htmlFor="" className="flex space-x-3 ">
                      <input
                        type="radio"
                        name={data.name}
                        value={data.options[1]}
                      />
                      <p className="text-[17px]">{data.options[1]}</p>
                    </label>
                    <label htmlFor="" className="flex space-x-3">
                      <input
                        type="radio"
                        name={data.name}
                        value={data.options[3]}
                      />
                      <p className="text-[17px]">{data.options[3]}</p>
                    </label>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuetionsPatternCard;
