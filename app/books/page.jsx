"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import booksData from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const classes = Object.keys(booksData);
  const [selectedClass, setSelectedClass] = useState("All");
  const books = booksData[selectedClass];

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <div>
        <h1 className="text-center text-white text-4xl mt-10">
          আপনার শ্রেণী নির্বাচন করে বইটি নির্বাচন করুন
        </h1>
      </div>
      <div
        className="flex space-x-3 pb-2 mt-6 mb-10"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS
        }}
      >
        <style>
          {`
            /* Hide the horizontal scrollbar */
            .flex::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <button
          onClick={() => setSelectedClass("All")}
          className={`px-4 py-2 ${
            selectedClass === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } rounded-md`}
        >
          সকল শ্রেণী
        </button>

        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            onClick={() => setSelectedClass(`Class ${index + 1}`)}
            className={`px-4 py-2 ${
              selectedClass === `Class ${index + 1}`
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded-md hover:bg-blue-500 hover:text-white`}
          >
            {index === 0
              ? "প্রথম "
              : index === 1
              ? "দ্বিতীয় "
              : index === 2
              ? "তৃতীয় "
              : index === 3
              ? "চতুথ "
              : index === 4
              ? "পঞ্চম "
              : index === 5
              ? "ষষ্ঠ "
              : index === 6
              ? "সপ্তম "
              : index === 7
              ? "অষ্টম "
              : index === 8
              ? "নবম-দশম "
              : index === 9
              ? "একাদশ-দ্বাদশ "
              : ""}
            শ্রেণী
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
        {books.map((book, index) => (
          <Link href="https://qsolution.vercel.app/books" key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-center py-3 rounded shadow-md "
            >
              <Image
                src={book.cover}
                alt=""
                width={150}
                height={250}
                className="mx-auto"
              />
              <p className="text-lg font-semibold mt-3">{book.title}</p>
              <p className="text-gray-600">{book.author}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
