import React from "react";
import logo from "../images/logo.png";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const EditiorNavbar = () => {
  return (
    <>
      <div className="EditiorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <Link to={"/"} className=" flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/7362/7362019.png"
              width="50px"
              height="50px"
              alt=""
            />
            <h1 className="font-bold text-xl">Nish</h1>
          </Link>
        </div>
        <p>
          File / <span className="text-[gray]">My first project</span>
        </p>
        <i className="p-[8px] btn bg-black rounded-[5px] cursor-pointer text-[20px]">
          <FiDownload />
        </i>
      </div>
    </>
  );
};

export default EditiorNavbar;
