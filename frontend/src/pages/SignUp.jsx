import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://coderunneride.onrender.com/api/user/register`, {
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
      <div className="container w-screen min-h-screen flex flex-col lg:flex-row items-center justify-between lg:pl-[100px] p-3">
        <div className="left w-full lg:w-[35%] mb-10 lg:mb-0">
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
        <div className="right hidden lg:block w-[55%]">
          <img
            src="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?w=740&t=st=1727124295~exp=1727124895~hmac=32731f50121906d993cbf00f6541d51849c20c9a4eb7d780dcfba68ea8c82d16"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
