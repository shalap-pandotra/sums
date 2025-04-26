import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColour font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColour mt-4">
        {desc}
      </p>

      <div className="flex justify-between items-center mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-[12.5px] border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColour hover:border-none"
        >
          <FaChevronRight className="group-hover:text-stone-100 w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
