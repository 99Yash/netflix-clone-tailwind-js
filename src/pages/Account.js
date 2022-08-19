import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white ">
        <img
          className="  w-full object-cover h-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/8db04df8-caaf-4f19-8e51-9309664068b2/IN-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] "></div>
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className="text-3xl md:text-5xl font-bold ">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
