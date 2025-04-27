import React from "react";
import aboutImg from "../../assets/images/about.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />

          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              proud to offer the best services and happy to help you.
            </h2>

            <p className="text__para mt-[30px]">
              our best is something we strive for everyday !
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
