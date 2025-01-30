import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

    const[loginData,setLoginData] = useState({
        username:'',
        password:'',
    })


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData)=> ({
        ...prevData,
        [name]:value
    }))
  };

  //Submit function

  const handleLoginSubmit = async(e) =>{
    e.preventDefault();

    try{
        const response = await axios.post('http://localhost:8000/login',loginData)
        const {success,message}= response.data;
        if(success){
            console.log('Login Successful')
        }
        else{
            console.log(message);
        }
    }
    catch(error){
        console.error('Login error',error)
    }
    setLoginData({
        username:'',
        password:''
    })
  }
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
            onSubmit={handleLoginSubmit}
            className=" form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold tece">
                Login now
              </p>
              <p className="text-center text-base text-gray-700"></p>
            </div>
            <div className="flex flex-col gap-y-5">
              <input
                type="text"
                className="rounded-3xl bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
              />

              <input
                className="rounded-3xl bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300"
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />

              <span className="text-sm text-gray-500 ">
                Not Registered Yet??{" "}
                <Link
                  className="hover:text-blue-400 hover:underline cursor-pointer"
                  to="/registration"
                >
                  Register now
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
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>












    // <div>
    //   <h1>LoginPage</h1>
    //   <form onSubmit={handleLoginSubmit}>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Username"
    //       value={loginData.username}
    //       onChange={handleLoginChange}
    //       required
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={loginData.password}
    //       onChange={handleLoginChange}
    //       required
    //     />
    //     <br />
    //     <button type="submit">Login</button>
    //     <p>Not registered yet?? <Link to ="/registration">Register Here</Link></p>
    //   </form>
    // </div>
  );
};

export default LoginPage;
