import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [error, setError] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/user/login", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // Store token and user details in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", data.userId);

        // Display success toast and redirect
        toast.success(data.message);

        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = "/";
        }, 200);
      } else {
        setError(data.message);
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error("Error in submitForm:", error);
    }
  };

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[35%]">
          <div className="flex items-center">
          <img
              src="https://cdn-icons-png.flaticon.com/128/14111/14111306.png"
              width="90px"
              height="90px"
              alt=""
            />
            <h1 className="font-bold text-4xl">Nish</h1>
          </div>
          <form onSubmit={submitForm} className="w-full mt-[40px]" action="">
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
              Don't have an account{" "}
              <Link to="/signUp" className="text-[#00AEEF]">
                Sign Up
              </Link>
            </p>

            <p className="text-red-500 text-[14px] my-2">{error}</p>

            <button className="btnBlue w-full mt-[20px]">Login</button>
          </form>
        </div>
        <div className="right w-[55%]">
         <img src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?w=740&t=st=1727124295~exp=1727124895~hmac=32731f50121906d993cbf00f6541d51849c20c9a4eb7d780dcfba68ea8c82d16" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
