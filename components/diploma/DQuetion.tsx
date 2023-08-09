import React from "react";

const DQuetion = () => {
  const TooShortquetions = [
    {
      question: "১। বিয়ের সময় অনুপমের বয়স কত ছিল ?",
    },
    {
      question: "২। অন্নপাপ কী ?",
    },
    {
      question: "৩। সোনার তরী' কবিতায় মাঝি কে ?",
    },
    {
      question: "৪। 'বঙ্গভাষা' কবিতার পূর্বনাম কী ছিল ?",
    },
    {
      question: "৫। বাংলাদেশের সবচেয়ে বড় জাদুঘর কোনটি ?",
    },
    {
      question: "৬। কখন জনসমুদ্রে জোয়ার লাগল ?",
    },
    {
      question: "৭। তপুর হাতের প্ল্যাকাড কী লেখা ছিল ?",
    },
    {
      question: "৮। পথের বাঁধা কোন বয়সে ভাঙা সম্ভব ?",
    },
    {
      question: "৯। “জননী সাহসিনী ১৯৭১” উপন্যাসের কেন্দ্রীয় চরিত্রের নাম কী ?",
    },
    {
      question: "১০। কাচের জানালা ভেঙ্গে কে ঘরে প্রবেশ করল ?",
    },
  ];

  const Shortquetions = [
    {
      question:
        "১১। বিলাসী গল্পে নালতের মিত্তির কে ? সমাজে তার মুখ দেখাবার জো রইল না কেন ?",
    },
    {
      question:
        "১২। 'সকল শাস্ত্র খুঁজে পাবে সখা, খুলে দেখ নিজ প্রাণ' ব্যাখ্যা কর।",
    },
    {
      question: "১৩। 'সোনার তরী' কবিতার কৃষকের প্রত্যাশা কতটুকু পূরণ হয়েছিল?",
    },
    {
      question: "১৪। “কেলিনু শৈবালে ভুলি কমল-কানন!” -উক্তিটি বিশ্লেষণ কর।",
    },
    {
      question: "১৫। বন্ধুদের মাঝে তপু আবার কীভাবে ফিরে এল ?",
    },
    {
      question: "১৬। বিয়ের আসর থেকে অনুপমকে কে এবং কেন ফিরিয়ে দিলেন ?",
    },
    {
      question: "১৭। 'এ বয়সে প্রাণ তীব্র আর প্রখর' কোন বয়সে এবং কেন ?",
    },
    {
      question: "১৮। পুরুষের সমকক্ষতা লাভের জন্য নারীকে কী কী কাজ করতে হবে ?",
    },
    {
      question: "১৯। মানুষ নাটিকায় মা আগন্তককে কেন রক্ষা করলেন ? ",
    },
    {
      question: "২০। মুক্তিযুদ্ধে হাশেম আলীর কী ভূমিকা ছিল ?",
    },
  ];

  const longQuestions = [
    {
      question: "২১। “সাম্যবাদী” কবিতার মূল বক্তব্য তোমার নিজের ভাষায় লেখ।",
    },
    {
      question:
        "২২। “সোনার তরী” কবিতায় বর্ষা চিত্রের অন্তরালে কবি যে গভীর ভাবকে ব্যক্ত করতে চেয়েছেন তা লেখ।",
    },
    {
      question:
        "২৩। “'মানুষ' নাটিকায় সাম্প্রদায়িক সংকীর্ণতার উর্ধ্বে মানবতার জয়গান ধ্বনিত হয়েছে” - আলোচনা কর।",
    },
    {
      question: "২৪। “বিলাসী” গল্প অবলম্বনে বিলাসী চরিত্রটি বিশ্লেষণ কর।",
    },
    {
      question:
        "২৫। “অপরিচিতা” গল্প অবলম্বনে তৎকালীন সমাজের ভাষাচিত্র অঙ্কন কর।",
    },
    {
      question:
        "২৬। “জাগো গো ভগিনি” প্রবন্ধ অবলম্বনে নারী শিক্ষার গুরুত্ব ও তাৎপর্য ব্যাখ্যা কর।",
    },
  ];

  return (
    <div className="md:px-20 px-4 py-4">
      <div className="bg-white text-black p-5 rounded">
        <div>
          <h1 className=" text-2xl lg:text-2xl font-bold text-center">
            বাংলাদেশ কারিগরি শিক্ষা বোর্ড , ঢাকা
          </h1>
          <h1 className="  font-semibold text-center">
            ডিপ্লোমা ইন ইঞ্জিনিয়ারিং
          </h1>
          <h1 className=" font-bold text-center">
            ১ম পর্ব সমাপনী পরীক্ষা-২০২২
          </h1>
          <h1 className=" font-bold text-center">
            <span className="underline">টেকনোলজি</span> : সকল টেকনোলজি (২০২২
            প্রবিধান)
          </h1>
          <div className="flex justify-center space-x-2">
            <h1 className="  font-bold text-center">বিষয় : বাংলা-১</h1>
            <h1 className="  font-bold text-center">(বিষয় কোড : ২৫৭১১)</h1>
          </div>
        </div>
        <div className="timeBar flex justify-between mt-3">
          <div className="font-semibold">সময় -- ৩ ঘণ্টা</div>
          <div className="font-semibold">পূর্ণমান -- ৬০</div>
        </div>
        <div className="qNotes my-3 lg:px-[10%]">
          <p className="lg:text-lg underline text-center">
            <span className="font-semibold ">বিশেষ দ্রষ্টব্য:</span> ক ও খ
            বিভাগের সকল প্রশ্নের এবং গ-বিভাগ হতে যে-কোনো ৫(পাঁচ) টি প্রশ্নের
            উত্তর দাও।
          </p>
        </div>

        <h1 className="font-semibold text-center underline my-4">
          ক-বিভাগ (মান : ১ x ১০ = ১০ )
        </h1>

        {TooShortquetions.map((q) => (
          <h5 key={q.question} className="text-[17px]">
            {q.question}
          </h5>
        ))}
        <h1 className="font-semibold text-center underline my-4">
          খ-বিভাগ (মান : ২ x ১০ = 20 )
        </h1>
        {Shortquetions.map((q) => (
          <h5 key={q.question} className="text-[17px]">
            {q.question}
          </h5>
        ))}
        <div className="pb-[100px]">
          <h1 className="font-semibold text-center underline my-4">
            গ-বিভাগ (মান : ৬ × ৫ = 30 )
          </h1>
          {longQuestions.map((q) => (
            <h5 key={q.question} className="text-[17px]">
              {q.question}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DQuetion;
