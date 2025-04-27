import signupImg from "../assets/images/signup.jpg";
import React, { useState } from "react";
import avatar from "../assets/images/carpenter-img-01.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    photo: selectedFile,
    name: "",
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
  };

  const submitHandler = async event =>{
    event.preventDefault()
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColour rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-[22px] text-headingColour font-bold leading-9 mb-10">
              Create an <span className="text-primaryColour">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#902929] focus:outline-none focus:border-b-red-950 focus:shadow-md text-[22px] leading-7 text-headingColour placeholder:text-textColour cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#902929] focus:outline-none focus:border-b-red-950 focus:shadow-md text-[22px] leading-7 text-headingColour placeholder:text-textColour cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="enter a password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#902929] focus:outline-none focus:border-b-red-950 focus:shadow-md text-[22px] leading-7 text-headingColour placeholder:text-textColour cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="font-bold text-headingColour text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColour font-semibold leading-7 text-[15px] px-4 py-3 focus:outline-none"
                  >
                    <option value="user">User</option>
                    <option value="professional">Professional</option>
                  </select>
                </label>

                <label
                  htmlFor=""
                  className="font-bold text-headingColour text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColour font-semibold leading-7 text-[15px] px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColour flex items-center justify-center">
                  <img src={avatar} className="w-full rounded-full" alt="" />
                </figure>

                <div className="relative w-[160px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] leading-6 text-[16px] overflow-hidden bg-[#0066ff46] text-headingColour font-semibold rounded-lg truncate cursor-pointer"
                  >
                    upload photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColour text-white text-[18px] leading-[30px] rounded-[12.5px] py-2 px-3"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColour text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColour font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
