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

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColour font-[800] md:text-[60px] md:leading-[70px]">
                  A more convient way to find professionals
                </h1>

                <p className="text__para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  voluptatibus facere vel officiis porro consequuntur ipsa,
                  eligendi voluptates consectetur iste? Minima similique odit
                  unde nostrum cupiditate quos nam repellat mollitia.
                </p>

                <button className="btn">Request an appointment</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div></div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
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
              World-class services for everyone. Our system offers easy access
              with local professionals
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, officia temporibus. Iste, inventore perspiciatis!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, officia temporibus. Iste, inventore perspiciatis!
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
                  book an appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColour font-[400] mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, officia temporibus. Iste, inventore perspiciatis!
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

    </>
  );
};

export default Home;
