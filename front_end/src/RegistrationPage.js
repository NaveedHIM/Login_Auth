import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        registrationData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Track all your progress at one place
            </span>
            <p className="flex flex-col gap-0 text-4xl md:text-6xl 3xl:text-7xl font-black text-center text-blue-700">
              <span>Team Progress Manager</span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleRegistrationSubmit}
            className=" form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold tece">
                Registration
              </p>
              <p className="text-center text-base text-gray-700"></p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                className="rounded-3xl bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                name="username"
                placeholder="Username"
                value={registrationData.username}
                onChange={handleRegistrationChange}
                required
              />

              <input
                className="rounded-3xl bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                type="password"
                name="password"
                placeholder="Password"
                value={registrationData.password}
                onChange={handleRegistrationChange}
                required
              />

              <span className="text-sm text-gray-500 ">
                Already Registered??{" "}
                <Link
                  className="hover:text-blue-400 hover:underline cursor-pointer"
                  to="/login"
                >
                  Login here
                </Link>
              </span>
              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Forget Password
              </span>

              <button
                type="submit"
                label="Submit"
                className="w-full h-10 bg-blue-700 text-white"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    //   {/* Right Side */}
    //   <h1 className="">RegistrationPage</h1>
    //   <div>
    //   <form onSubmit={handleRegistrationSubmit}>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Username"
    //       value={registrationData.username}
    //       onChange={handleRegistrationChange}
    //       required
    //     />
    //   <br />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={registrationData.password}
    //       onChange={handleRegistrationChange}
    //       required
    //     />
    //     <br />
    //     <button type="submit">Register</button>
    //     <p>Already Registered?? <Link to ='/login'>Login here</Link></p>
    //   </form>
    //   </div>
    // </div>
  );
};

export default RegistrationPage;
