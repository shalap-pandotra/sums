import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColour font-[800] md:text-[60px] md:leading-[70px]">
                  Find Trusted Utility Professionals Near You
                </h1>

                <p className="text__para">
                  Connect instantly with skilled electricians, plumbers,
                  cleaners, handymen, and more — all in one place.
                </p>

                <button className="btn">Book a service</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div></div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-[12.5px]" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px] rounded-[12.5px]"
                  src={heroImg02}
                  alt=""
                />
                <img
                  className="w-full rounded-[12.5px]"
                  src={heroImg03}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best utility services
            </h2>
            <p className="text-center text__para">
              We make it easy to find reliable local professionals for all your
              home and office needs. Fast, trustworthy, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColour font-[700] text-center">
                  find a professional
                </h2>
                <p className="text-[16px] leading-7 text-textColour font-[400] mt-4 text-center">
                  Browse and hire trusted plumbers, electricians, handymen, and
                  other service experts in your area.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-[12.5px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColour hover:border-none"
                >
                  <FaChevronRight className="group-hover:text-stone-100 w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColour font-[700] text-center">
                  find a location
                </h2>
                <p className="text-[16px] leading-7 text-textColour font-[400] mt-4 text-center">
                  Quickly locate nearby service providers using our easy-to-use
                  map and search tools.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-[12.5px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColour hover:border-none"
                >
                  <FaChevronRight className="group-hover:text-stone-100 w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColour font-[700] text-center">
                  book a service
                </h2>
                <p className="text-[16px] leading-7 text-textColour font-[400] mt-4 text-center">
                  Schedule services at your convenience with just a few clicks —
                  no phone calls needed.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-[12.5px] border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColour hover:border-none"
                >
                  <FaChevronRight className="group-hover:text-stone-100 w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our services</h2>
            <p className="text__para text-center">
              From quick fixes to major projects, we connect you with
              experienced local professionals who get the job done right.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get the Help You Need, <br />
                When You Need It
              </h2>
              <ul className="p-4">
                <li className="text__para">1. Easy and fast booking</li>

                <li className="text__para">2. Verified service providers</li>

                <li className="text__para">3. Flexible scheduling options</li>
              </ul>

              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[12.5px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColour font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColour font-[400]">
                      10:00 AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColour rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColour font-[500] mt-2 lg:mt-4 rounded-[4px]">
                  Call
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequently asked questions from our happy customers
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
