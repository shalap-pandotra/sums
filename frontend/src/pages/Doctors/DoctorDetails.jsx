import carpenterImg from "../../assets/images/carpenter-img-02.png";
import React, { useState } from "react";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={carpenterImg} alt="" className="w-full" />
              </figure>

              <div className="">
                <span className="bg-[#CCF0F3] text-irisBlueColour py-1 px-6 lg:py-2 lg:px-6 text-[12px]  leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-[12.5px]">
                  Custom Designs
                </span>
                <h3 className="text-headingColour text-[22px] mt-3 leading-9 font-bold">
                  Amanpreet Singh
                </h3>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#902929]">
              <button
                onClick={() => setTab("about")}
                className={` ${
                  tab === "about" &&
                  "border-b border-solid border-primaryColour"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColour font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab("feedback")}
                className={` ${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColour"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColour font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px] ">
              {tab === "about" && <DoctorAbout />}

              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
