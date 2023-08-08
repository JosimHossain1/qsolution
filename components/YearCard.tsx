import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const BoardCard = () => {
  return (
    <div className="card cursor-pointer p-2 flex justify-around rounded-lg bg-white flex-1">
      {/* Content */}
      <div className="content w-[95%] mx-1">
        <h3 className=" mt-2 font-semibold text-black kalpurush text-[18px] md:text-[25px]">
          Name
        </h3>
      </div>
      {/* Arrow */}
      <div className="w-[5%] flex items-center">
        <ArrowRightIcon className="w-6 text-black" />
      </div>
    </div>
  );
};

export default BoardCard;
