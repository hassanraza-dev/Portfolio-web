import React from "react";

const SideCard = () => {
  return (
    <div className="flex">
      <div class="p-1 mt-5 w-2/8 h-[470px] bg-black m-auto mt-20 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 ">
        <div class="flex p-5 h-full w-full flex-col items-center justify-center bg-black back">
          <h1 class="text-2xl uppercase font-black text-white">
            Muhammad Hassan
          </h1>
          <span className="bg-[#1D1D1D] text-white rounded-2xl m-4 px-3 py-1">
            Frontend Developer
          </span>
          <div>
            {" "}
            <span className="bg-[#1D1D1D] text-white rounded-2xl m-1 px-3 py-1">
              Facebook
            </span>{" "}
            <span className="bg-[#1D1D1D] text-white rounded-2xl m-1 px-3 py-1">
              Twitter
            </span>{" "}
            <span className="bg-[#1D1D1D] text-white rounded-2xl m-1 px-3 py-1">
              Github
            </span>{" "}
            <span className="bg-[#1D1D1D] text-white rounded-2xl m-1 px-3 py-1">
              LinkedIn
            </span>
          </div>
          <div className=" h-full w-full text-white rounded-2xl m-1 px-7 mt-5 py-3">
            <div className="border-b py-2 border-gray-500">
              <span className="text-xs text-gray-500">Phone</span>
              <p>+923102175962</p>
            </div>
            <div className="py-2">
              <span className="text-xs text-gray-500">Email</span>
              <p>hraza7015@gmail.com</p>
            </div>
            <div className="border-t py-2 border-gray-500">
              <span className="text-xs text-gray-500">Location</span>
              <p>Karachi</p>
            </div>
            <div className="border-t py-2 border-gray-500">
              <span className="text-xs text-gray-500">Birthday</span>
              <p>Sep 18, 1998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
