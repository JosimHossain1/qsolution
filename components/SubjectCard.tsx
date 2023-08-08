import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const SubjectCard = (props: any) => {
  return (
    <div className="card cursor-pointer p-5 flex justify-around rounded-lg bg-white flex-1">
      {/* Icon */}
      <div className="w-[20%]">
        <div className="iconCard">{props.icon}</div>
      </div>

      {/* Content */}
      <div className="content w-[70%] mx-3">
        <h3 className=" mt-2 font-semibold text-black kalpurush text-[20px]">
          {props.name}
        </h3>
      </div>
      {/* Arrow */}
      <div className="w-[5%] flex items-center">
        <ArrowRightIcon className="w-6 text-black" />
      </div>
    </div>
  );
};

export default SubjectCard;
