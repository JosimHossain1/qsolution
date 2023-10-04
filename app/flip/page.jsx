"use client";
import Image from "next/image";
import React, { useState } from "react";
import PageFlip from "react-pageflip";

// Define an array of image URLs for each page
const pageImages = [
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_1_bangla.f8bc3f8d.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_1_english.095ec65f.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_1_math.3f7d7fdc.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_2_bangla.72e5d555.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_2_english.4f9295ce.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_2_math.4ad29799.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_bangla.faadb0de.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_english.fc3c2c0e.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_math.e8c8323b.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_science.7e73b927.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_gbs.ad3737b6.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_islam.8b232dcb.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_hindu.8549ef47.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_buddha.11fdb842.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_3_cristian.69c14c19.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_bangla.0a2dcf82.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_english.37a7fe19.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_math.55114d8a.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_science.0896f205.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_bgs.8403dc1e.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_islam.9b347859.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_hindu.6fd81cf7.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_buddha.3d70659a.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_4_cristian.e24cb45c.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_bangla.07133b47.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_english.d4839e4f.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_math.c5536cbc.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_science.aeb99093.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_bgs.2236b047.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_islam.87db23ba.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_hindu.e47e5f3a.png&w=750&q=75",
  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_buddha.5f264e57.png&w=750&q=75",

  "https://qimage.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclass_5_cristian.89fe88f8.png&w=750&q=75",
];

const totalNumberOfPages = pageImages.length; // Total number of pages in the book
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
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Book Cover Flip
      </h1>

      <div className="text-center mb-4 hidden ">
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

      <div className="book-container mx-auto">
        <PageFlip
          className="book mx-auto"
          width={400}
          height={600}
          size="fixed"
          minWidth={315}
          maxWidth={600}
          minHeight={420}
          maxHeight={800}
          maxShadowOpacity={0.2}
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
