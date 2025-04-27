import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import starIcon from "./../../assets/images/Star.png";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalProjects,
    workshop,
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="rounded-[12.5px]" />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColour font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColour py-1 px-2 lg:py-2 lg:px-6 text-[18px] rounded-[12.5px] lg:text-[16px] lg:leading-7 font-semibold">
          {specialty}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColour">
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-textColour">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div className="">
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColour">
            {totalProjects}
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColour">
            At {workshop}
          </p>
        </div>

        <Link
          to="/doctors/1"
          className="w-[44px] h-[44px] rounded-[12.5px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColour hover:border-none"
        >
          <FaChevronRight className="group-hover:text-stone-100 w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
