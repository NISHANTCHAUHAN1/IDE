import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const EditiorNavbar = () => {
  return (
    <div className="EditiorNavbar flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-[100px] h-auto sm:h-[80px] bg-[#141414] py-4 sm:py-0">
      {/* Logo Section */}
      <div className="logo mb-2 sm:mb-0">
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/14111/14111306.png"
            width="40px"
            height="40px"
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="font-bold text-lg sm:text-xl">Nish</h1>
        </Link>
      </div>

      {/* File Path */}
      <p className="text-sm sm:text-base mb-2 sm:mb-0">
        File / <span className="text-gray-400">My first project</span>
      </p>

      {/* Download Button */}
      <div className="hidden sm:block p-2 sm:p-[8px] bg-black rounded-[5px] cursor-pointer text-[16px] sm:text-[20px]">
        <FiDownload />
      </div>
    </div>
  );
};

export default EditiorNavbar;