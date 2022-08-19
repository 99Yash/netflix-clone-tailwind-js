import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen ">
      <img
        className="hidden sm:block absolute w-full object-cover h-screen "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/8db04df8-caaf-4f19-8e51-9309664068b2/IN-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
      <div className="fixed w-full px-4 z-50 py-24 ">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
          <div className="max-w-[320px] mx-auto py-16  ">
            <h1 className="text-3xl font-bold   ">Sign Up</h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col py-4 "
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 my-2 bg-gray-700 rounded "
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 my-2 bg-gray-700 rounded "
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold ">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600 ">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>
                <Link className="ml-2 text-gray-50 text-sm " to="/login">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
