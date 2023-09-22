"use client";
import { useState } from "react";
import questionsData from "../../data/diploma.json";

const QuestionSelector = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [selectedQuestions1, setSelectedQuestions1] = useState([]);
  const [selectedQuestions2, setSelectedQuestions2] = useState([]);
  const [selectedQuestions3, setSelectedQuestions3] = useState([]);

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setSelectedSemester("");
    setSelectedYear("");
    setSelectedSubject("");
  };

  const handleSemesterChange = (e) => {
    const semester = e.target.value;
    setSelectedSemester(semester);
    setSelectedYear("");
    setSelectedSubject("");
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setSelectedSubject("");
  };

  const handleSubjectChange = (e) => {
    const subject = e.target.value;
    setSelectedSubject(subject);
  };

  const handleRetrieveQuestions = () => {
    if (
      selectedDepartment &&
      selectedSemester &&
      selectedYear &&
      selectedSubject
    ) {
      const questions =
        questionsData[selectedDepartment][selectedSemester][selectedYear][
          selectedSubject
        ]?.questions || [];
      setSelectedQuestions(questions[0].tooShort);
      setSelectedQuestions1(questions[1].short);
      setSelectedQuestions2(questions[2].brought);
      setSelectedQuestions3(questions[3].brought);
    } else {
      setSelectedQuestions([]);
    }
  };

  return (
    <div className="mt-8 p-4  rounded-md shadow-lg text-center">
      <h2 className="md:text-2xl mb-4 text-white md:font-semibold">
        আপনার ডিপার্টমেন্ট, সেমিস্টার, বছর এবং সাল সিলেক্ট করে। ক্লিক বাটনে চাপ
        দিন
      </h2>

      <div className="md:flex md:space-x-10 justify-center">
        <div className="mb-4 ">
          <select
            onChange={handleDepartmentChange}
            value={selectedDepartment}
            className="w-full md:w-46 p-2 border rounded-md text-xl outline-none cursor-pointer"
          >
            <option value="" disabled selected>
              ডিপার্টমেন্ট
            </option>
            {Object.keys(questionsData).map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <select
            onChange={handleSemesterChange}
            value={selectedSemester}
            disabled={!selectedDepartment}
            className="w-full md:w-46 p-2 border rounded-md text-xl outline-none cursor-pointer"
          >
            <option value="">সেমিস্টার</option>
            {selectedDepartment &&
              Object.keys(questionsData[selectedDepartment]).map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <select
            onChange={handleYearChange}
            value={selectedYear}
            disabled={!selectedSemester}
            className="w-full md:w-46 p-2 border rounded-md text-xl outline-none cursor-pointer"
          >
            <option value="">বছর</option>
            {selectedDepartment &&
              selectedSemester &&
              Object.keys(
                questionsData[selectedDepartment][selectedSemester]
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <select
            onChange={handleSubjectChange}
            value={selectedSubject}
            disabled={!selectedYear}
            className="w-full md:w-46 p-2 border rounded-md text-xl outline-none cursor-pointer"
          >
            <option value="">বিষয়</option>
            {selectedDepartment &&
              selectedSemester &&
              selectedYear &&
              Object.keys(
                questionsData[selectedDepartment][selectedSemester][
                  selectedYear
                ]
              ).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
        </div>
        <button
          onClick={handleRetrieveQuestions}
          disabled={!selectedSubject}
          className="bg-blue-500 text-white w-full md:w-24 p-2 outline-none cursor-pointer h-[100%]  rounded-md text-xl "
        >
          ক্লিক করুন
        </button>
      </div>

      {selectedQuestions.length > 0 ? (
        <div className="mt-4 ">
          <div className="md:px-52 px-4 py-4">
            <div className="bg-white text-black p-5 rounded">
              <div>
                <h1 className=" text-2xl lg:text-2xl font-bold text-center">
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড , ঢাকা
                </h1>
                <h1 className="font-semibold text-center">
                  ডিপ্লোমা ইন ইঞ্জিনিয়ারিং
                </h1>
                <h1 className=" font-bold text-center">
                  ১ম পর্ব সমাপনী পরীক্ষা-২০২২
                </h1>
                <h1 className=" font-bold text-center">
                  <span className="underline">টেকনোলজি</span> : সকল টেকনোলজি
                  (২০২২ প্রবিধান)
                </h1>
                <div className="flex justify-center space-x-2">
                  <h1 className="  font-bold text-center">বিষয় : বাংলা-১</h1>
                  <h1 className="  font-bold text-center">
                    (বিষয় কোড : ২৫৭১১)
                  </h1>
                </div>
              </div>
              <div className="timeBar flex justify-between mt-3">
                <div className="font-semibold">সময় -- ৩ ঘণ্টা</div>
                <div className="font-semibold">পূর্ণমান -- ৬০</div>
              </div>
              <div className="qNotes my-3 lg:px-[10%]">
                <p className="lg:text-lg underline text-center">
                  <span className="font-semibold ">বিশেষ দ্রষ্টব্য:</span> ক ও খ
                  বিভাগের সকল প্রশ্নের এবং গ-বিভাগ হতে যে-কোনো ৫(পাঁচ) টি
                  প্রশ্নের উত্তর দাও।
                </p>
              </div>

              <h1 className="font-semibold text-center underline my-4">
                ক-বিভাগ (মান : ১ x ১০ = ১০ )
              </h1>

              <div className=" text-left w-[70%] mx-auto rounded-md">
                <ul>
                  {selectedQuestions.map((question, index) => (
                    <li key={index} className="mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <h1 className="font-semibold text-center underline my-1">
                খ-বিভাগ (মান : ২ x ১০ = ৩০ )
              </h1>

              <div className="text-left w-[70%] mx-auto rounded-md">
                <ul>
                  {selectedQuestions1.map((question, index) => (
                    <li key={index} className="mb-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pb-[100px]">
                <h1 className="font-semibold text-center underline my-1">
                  গ-বিভাগ (মান : ৬ × ৫ = ৩০ )
                </h1>

                <div className="text-left w-[70%] mx-auto rounded-md">
                  <ul>
                    {selectedQuestions2.map((question, index) => (
                      <li key={index} className="mb-2">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionSelector;
