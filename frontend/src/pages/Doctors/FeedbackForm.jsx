import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

    const handleSubmitReview = async e=>{
        e.preventDefault()
    }

  return (
    <form action="">
      <div>
        <h3 className="text-headingColour text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall experience?
        </h3>

        <div className="">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                className={`${
                  index <= (hover || rating)
                    ? "text-[#902929]"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer transition-colors duration-300`}
              >
                <FaStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-30px">
        <h3 className="text-headingColour text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>

        <textarea
          className="border border-solid border-[#902929] focus:outline outline-primaryColour w-full px-4 py-3 rounded-[12.5px]"
          rows="5"
          placeholder="write your message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" onClick={handleSubmitReview} className="btn">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
