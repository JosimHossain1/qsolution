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
    <div className="text-white text-center py-10">
      <div>
        <h1 className="font-extrabold text-3xl md:text-6xl">
          প্রশ্ন সার্চ করুন{" "}
        </h1>
        <form
          onSubmit={handleSearch}
          className="bg-white w-[88%] md:w-[50%] mx-auto mt-6 rounded-full flex items-center justify-end"
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
            className="p-3 w-[20%] md:w-[10%] rounded-full mr-1 text-xl bg-gray-700 absolute cursor-pointer"
          />
        </form>
      </div>

      <div className="px-8 lg:px-80 my-10">
        <div className={`bg-white  text-black rounded-md  text-left`}>
          <div>
            {/* <h1 className="text-lg  font-semibold text-blue-600">
              {searchQuery}
            </h1> */}
            <p className={`${hide} text-[17px] font-semibold`}>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

// "use client";
// import { useState } from "react";

// const Search = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState("");

//   const handleDepartmentChange = (event: any) => {
//     setSelectedDepartment(event.target.value);
//   };

//   const [selectedSubDepartment, setSelectedSubDepartment] = useState("");

//   const handleSubDepartmentChange = (event: any) => {
//     setSelectedSubDepartment(event.target.value);
//   };

//   return (
//     <div className="md:px-24 px-6">
//       <div>
//         <h1 className="text-center text-white my-10 text-[25px] uppercase">
//           Search You Questions
//         </h1>
//       </div>

//       <div className="flex justify-center items-center space-x-3">
//         <select
//           className="select w-[500px] px-4 py-1 text-[20px] rounded-[5px]"
//           value={setSelectedSubDepartment}
//           onChange={handleSubDepartmentChange}
//         >
//           <option value="" disabled>
//             Department
//           </option>
//           <option value="General">General</option>
//           <option value="Polytechnic">Polytechnic</option>
//         </select>

//         {selectedSubDepartment === "General" && (
//           <div>
//             <select
//               className="select w-[500px] px-4 py-1 text-[20px] rounded-[5px]"
//               value={selectedDepartment}
//               onChange={handleDepartmentChange}
//             >
//               <option value="">General</option>
//               <option value="science">Science</option>
//               <option value="commerce">Commerce</option>
//               <option value="arts">Arts</option>
//             </select>

//             {selectedDepartment === "science" && (
//               <select
//                 defaultValue="option1"
//                 className="w-[500px] px-4 py-1 text-[20px] rounded-[5px]"
//               >
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="physics">Physics</option>
//                 <option value="chemistry">Chemistry</option>
//                 <option value="higher_math">Higher Math</option>
//               </select>
//             )}

//             {selectedDepartment === "commerce" && (
//               <select defaultValue="option1">
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="principles_marketing">
//                   Principles of Marketing
//                 </option>
//                 <option value="fundamentals_management">
//                   Fundamentals of Financial Management
//                 </option>
//                 <option value="financial_accounting">
//                   Financial Accounting
//                 </option>
//               </select>
//             )}

//             {selectedDepartment === "arts" && (
//               <select defaultValue="option1">
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="story_of_art">The Story of Art</option>
//                 <option value="thinking_clearly">
//                   The Art of Thinking Clearly
//                 </option>
//                 <option value="artists_way">The Artists Way</option>
//               </select>
//             )}
//           </div>
//         )}

//         {selectedSubDepartment === "Polytechnic" && (
//           <div>
//             <select
//               className="select w-[500px] px-4 py-1 text-[20px] rounded-[5px]"
//               value={selectedDepartment}
//               onChange={handleDepartmentChange}
//             >
//               <option value="">Polytechnic</option>
//               <option value="CST">CST</option>
//               <option value="Electrical">Electrical</option>
//               <option value="Civil">Civil</option>
//             </select>

//             {selectedDepartment === "CST" && (
//               <select defaultValue="option1">
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="physics">Python</option>
//                 <option value="chemistry">Java</option>
//                 <option value="higher_math">C++</option>
//               </select>
//             )}

//             {selectedDepartment === "Electrical" && (
//               <select defaultValue="option1">
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="Introduction to Electric Circuits">
//                   Introduction to Electric Circuits
//                 </option>
//                 <option value="Electric Machinery Fundamentals">
//                   Electric Machinery Fundamentals
//                 </option>
//                 <option value="Principles of Electric Machines and Power Electronics">
//                   Principles of Electric Machines and Power Electronics
//                 </option>
//               </select>
//             )}

//             {selectedDepartment === "Civil" && (
//               <select defaultValue="option1">
//                 <option value="option1" disabled>
//                   Subject
//                 </option>
//                 <option value="Civil Engineering Materials">
//                   Civil Engineering Materials
//                 </option>
//                 <option value="Soil Mechanics and Foundations">
//                   Soil Mechanics and Foundations
//                 </option>
//                 <option value="Highway Engineering">Highway Engineering</option>
//               </select>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;
