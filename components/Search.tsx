"use client";
import React, { useState } from "react";
import data from "@/data/QuestionsData";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [hide, setHide] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    const foundItem = data.find(
      (item) => item.question.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (foundItem) {
      setAnswer(foundItem.answer);
    } else {
      setAnswer("Answer not found.");
    }

    if (searchQuery === "") {
      setHide(`hidden`);
    } else {
      setHide(`block p-5`);
    }
  };

  return (
    <div className="text-primary text-center py-10">
      <div>
        <h1 className="font-extrabold text-3xl md:text-5xl">
          {" "}
          বইয়ের প্রশ্ন লিখে সার্চ করুন
        </h1>
        <form
          onSubmit={handleSearch}
          className="bg-white mx-auto mt-6 rounded-full flex items-center justify-end"
        >
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="প্রশ্নটি লিখুন....."
            className="p-4 outline-none text-gray-500  w-full rounded rounded-r-full  text-[18px] relative font-semibold"
          />

          <input
            type="submit"
            value="সার্চ"
            className="p-3 w-[20%] md:w-[10%] text-white rounded-full mr-1 text-xl bg-primary absolute cursor-pointer"
          />
        </form>
      </div>

      <div className="my-10">
        <div className={`bg-white  text-black rounded-md  text-left`}>
          <div>
            <p className={`${hide} text-[17px] font-semibold`}>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
