"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import booksData from "@/data/books.json";

const HomePage = () => {
  const classes = Object.keys(booksData);
  const [selectedClass, setSelectedClass] = useState("All");
  const books = booksData[selectedClass];

  return (
    <div className="container mx-auto p-4">
      <div
        className="flex space-x-2 pb-2"
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
          All
        </button>
        {Array.from({ length: 12 }, (_, index) => (
          <button
            key={index}
            onClick={() => setSelectedClass(`Class ${index + 1}`)}
            className={`px-4 py-2 ${
              selectedClass === `Class ${index + 1}`
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } rounded-md`}
          >
            Class {index + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-4"
          >
            <p className="text-lg font-semibold">{book.title}</p>
            <p className="text-gray-600">{book.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
