import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { MdLightMode, MdClose } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { toggleClass } from "../helper";
import { FaBars } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = ({ isGridLayout, setIsGridLayout }) => {
  const [data, setData] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/user/getuserdetails`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.user);
        } else {
          toast.error("An error occurred: " + error.message);
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
        <div className="logo">
          <Link to={"/"} className=" flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/14111/14111306.png"
              width="50px"
              height="50px"
              alt="logo"
            />
            <h1 className="font-bold text-xl">Nish</h1>
          </Link>
        </div>
        <div className="links hidden md:flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button
            onClick={logout}
            className="btnBlue !bg-red-500 min-w-[120px] ml-2 hover:!bg-red-600"
          >
            Logout
          </button>
          <Avatar
            onClick={() => {
              toggleClass(".dropDownNavbar", "hidden");
            }}
            name={data ? data.name : ""}
            size="40"
            round="50%"
            className=" cursor-pointer ml-2"
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="hamburger md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose /> : <FaBars />}
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`${ 
            isMenuOpen ? "block" : "hidden"
          } absolute top-[80px] left-0 w-full  ${isLightMode ? 'bg-white' : `bg-[#141414]`} flex flex-col items-center gap-4 py-4 md:hidden`}
        >
          <Link to="/" className={`${isLightMode ? `text-black` : `text-white`}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className={`${isLightMode ? `text-black` : `text-white`}`} onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className={`${isLightMode ? `text-black` : `text-white`}`} onClick={toggleMenu}>
            Contact
          </Link>
          <button
            onClick={() => {
              logout();
              toggleMenu();
            }}
            className="btnBlue !bg-red-500 min-w-[120px] hover:!bg-red-600 text-white"
          >
            Logout
          </button>
          <Avatar
            onClick={() => {
              toggleClass(".dropDownNavbar", "hidden");
              toggleMenu();
            }}
            name={data ? data.name : ""}
            size="40"
            round="50%"
            className="cursor-pointer ml-2"
          />
        </div>

        <div className="dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#1A1919] w-[150px] h-[160px]">
          <div className="py-[10px] border-b-[1px] border-b-[#fff]">
            <h3 className="text-[17px]" style={{ lineHeight: 1 }}>
              {data ? data.name : ""}
            </h3>
          </div>
          <i
            className="flex items-center gap-2 mt-3 mb-2 cursor-pointer"
            style={{ fontStyle: "normal" }}
            onClick={changeTheme}
          >
            <MdLightMode className="text-[20px]" /> Light mode
          </i>
          <i
            onClick={() => setIsGridLayout(!isGridLayout)}
            className="flex items-center gap-2 mt-3 mb-2 cursor-pointer"
            style={{ fontStyle: "normal" }}
          >
            <BsGridFill className="text-[20px]" />{" "}
            {isGridLayout ? "List" : "Grid"} layout
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
