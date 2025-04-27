import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    path: "https://github.com/shalap-pandotra/sums",
    icon: <FaGithub className="group-hover:text-white w-6 h-6" />,
  },

  {
    path: "https://github.com/shalap__pandotra/",
    icon: <FaInstagram className="group-hover:text-white w-6 h-6" />,
  },

  {
    path: "https://linkedin.com/in/shalap",
    icon: <FaLinkedin className="group-hover:text-white w-6 h-6" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },

  {
    path: "/",
    display: "About Us",
  },

  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Professional",
  },

  {
    path: "/",
    display: "Book a Service",
  },

  {
    path: "/",
    display: "Find a Location",
  },

  {
    path: "/",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColour mt-4">
              by shalap
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#902929] rounded-[12.5px] flex items-center justify-center group hover:bg-primaryColour hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColour">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li 
                key={index} 
                className="mb-4"
                >
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColour">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColour">
              I want to
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li 
                key={index} 
                className="mb-4"
                >
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColour">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColour">
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li 
                key={index} 
                className="mb-4"
                >
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColour">{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
