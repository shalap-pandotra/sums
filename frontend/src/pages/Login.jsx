import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-[12.5px] shadow-md md:p-10">
        <h3 className="text-headingColour text-[22px] leading-9 font-bold mb-10">
          Hello, <span className="text-primaryColour">Welcome </span>Back
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#902929] focus:outline-none focus:border-b-red-950 focus:shadow-md text-[22px] leading-7 text-headingColour placeholder:text-textColour cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#902929] focus:outline-none focus:border-b-red-950 focus:shadow-md text-[22px] leading-7 text-headingColour placeholder:text-textColour cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColour text-white text-[18px] leading-[30px] rounded-[12.5px] py-2 px-3"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColour text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-primaryColour font-medium ml-1"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
