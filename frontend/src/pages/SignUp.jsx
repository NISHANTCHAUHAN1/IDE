import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/authPageSide.png";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // const [error, setError] = useState("");

  const navigate = useNavigate();

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:5000/api/user/register`, {
  //     mode: "cors",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       name: name,
  //       email: email,
  //       password: pwd,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success === true) {
  //         toast.success(data.message);
  //         navigate("/login");
  //       } else {
  //         toast.error(data.message || "Registration failed");
  //       }
  //     });
  // };

  const submitForm = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/user/register", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: pwd,
        }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error in submitForm:", error);
    }
  };
  

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <img className="w-[200px]" src={logo} alt="" />
          <form onSubmit={submitForm} className="w-full mt-[60px]" action="">
            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="inputBox">
              <input
                required
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                type="password"
                placeholder="Password"
              />
            </div>

            <p className="text-[gray]">
              Already have an account{" "}
              <Link to="/login" className="text-[#00AEEF]">
                login
              </Link>
            </p>
            <button className="btnBlue w-full mt-[20px]">Sign Up</button>
          </form>
        </div>
        <div className="right w-[55%]">
          <img className="h-[100vh] w-[100%] object-cover" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
