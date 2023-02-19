import React from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
const SideCard = () => {
  return (
    <div className="block lg:flex ">
      <div class="p-1 mt-5 block sm:flex lg:w-6/12 w-10/12 m-auto mt-20 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 ">
        <div className="person-img h-[470px] sm:mb-0 mb-2 w-full rounded-2xl"></div>
        <div class="flex p-5 h-[470px]  w-full flex-col items-center rounded-2xl justify-center bg-black back">
          <h1 class="text-2xl text-center uppercase font-black text-white mb-2">
            Muhammad Hassan
          </h1>
          <span className="bg-[#1D1D1D] text-white rounded-xl mb-4 px-3 py-1">
            Frontend Developer
          </span>
          <div>
            {" "}
            <a
              href="https://www.linkedin.com/in/muhammad-hassan1998/"
              target={"_blank"}
            >
              <span className="bg-[#1D1D1D] text-white cursor-pointer rounded-xl m-1 px-2 py-2 ">
                <FaFacebookF className="inline m-0" size={"25"} />
              </span>{" "}
            </a>
            <span className="bg-[#1D1D1D] text-white cursor-pointer rounded-xl m-1 px-2 py-2">
              <FaTwitter className="inline" color="white" size={"25"} />
            </span>{" "}
            <span className="bg-[#1D1D1D] text-white cursor-pointer rounded-xl m-1 px-2 py-2">
              <FaGithub className="inline" color="white" size={"25"} />
            </span>{" "}
            <span className="bg-[#1D1D1D] text-white cursor-pointer rounded-xl m-1 px-2 py-2">
              <FaLinkedin className="inline" color="white" size={"25"} />
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
              <p>Karachi, Pakistan</p>
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
