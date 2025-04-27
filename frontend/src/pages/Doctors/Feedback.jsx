import avatar from "../../assets/images/avatar-icon.png";
import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { CiStar } from "react-icons/ci";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColour mb-[30px]">
          All reviews
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-20 h-20 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>

            <div className="">
              <h5 className="text-[16px] leading-6 text-primaryColour font-bold">
                Shalap Pandotra
              </h5>
              <p className="text-[14px] leading-6 text-textColour">
                {formatDate("02-14-2025")}
              </p>
              <p className="text__para mt-3 font-medium twxt-[15px]">
                {" "}
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <CiStar key={index} color="#902929" />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
