"use client";
import Image from "next/image";
import React, { useState } from "react";
import PageFlip from "react-pageflip";

const totalNumberOfPages = 10; // Total number of pages in the book

// Define an array of image URLs for each page
const pageImages = [
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  // Add URLs for the remaining pages here
];

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [inputPage, setInputPage] = useState(currentPage + 1);

  const nextPage = () => {
    if (currentPage < totalNumberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = () => {
    const pageNumber = parseInt(inputPage) - 1;
    if (pageNumber >= 0 && pageNumber < totalNumberOfPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bangladesh Book</h1>

      <div className="text-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full mr-2"
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          Previous Page
        </button>
        <input
          type="number"
          className="w-16 h-8 text-center mx-2 bg-transparent border-b border-blue-500"
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
          onClick={nextPage}
          disabled={currentPage === totalNumberOfPages - 1}
        >
          Next Page
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-full ml-2"
          onClick={goToPage}
        >
          Go to Page
        </button>
      </div>

      <div className="book-container">
        <PageFlip
          className="book"
          width={400}
          height={600}
          size="fixed"
          minWidth={315}
          maxWidth={600}
          minHeight={420}
          maxHeight={800}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          startPage={currentPage}
        >
          {Array.from({ length: totalNumberOfPages }, (_, index) => (
            <div className="page" key={index}>
              <div
                className={`page-content ${
                  index === currentPage ? "right-page" : "left-page"
                }`}
              >
                <h2 className="text-2xl mb-4">Page {index + 1}</h2>
                <Image
                  src={pageImages[index]}
                  alt={`Page ${index + 1}`}
                  width={600}
                  height={800}
                />
              </div>
            </div>
          ))}
        </PageFlip>
      </div>
    </div>
  );
};

export default IndexPage;
