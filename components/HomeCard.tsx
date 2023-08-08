import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const HomeCard = (props: any) => {
  const { icon, name, des } = props;
  return (
    <div className="card cursor-pointer p-5 flex justify-around rounded-lg bg-white flex-1">
      {/* Icon */}
      <div className="w-[20%]">
        <div className="iconCard">{icon}</div>
      </div>

      {/* Content */}
      <div className="content w-[74%] mx-1">
        <h3 className=" mt-2 font-semibold text-black kalpurush text-[25px]">
          {name}
        </h3>
        <p className="text-black kalpurush text-[15px]">{des}</p>
      </div>
      {/* Arrow */}
      <div className="w-[5%] flex items-center">
        <ArrowRightIcon className="w-6 text-black" />
      </div>
    </div>
  );
};

export default HomeCard;
