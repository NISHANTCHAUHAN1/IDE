import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [projTitle, setProjTitle] = useState("");
  const navigate = useNavigate();
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  const filteredData = data
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const createProj = async (e) => {
    e.preventDefault();

    if (projTitle.trim() === "") {
      return alert("Please Enter Project Title");
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/project/createproject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: projTitle,
            userId: localStorage.getItem("userId"),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setIsCreateModelShow(false);
        setProjTitle("");
        toast.success(data.message);
        navigate(`/editior/${data.projectId}`);
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  const getProj = () => {
    fetch(`http://localhost:5000/api/user/project/getproject`, {
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
          setData(data.projects);
        } else {
          setError(data.message);
        }
      });
  };

  useEffect(() => {
    getProj();
  }, []);

  const [userData, setUserData] = useState(null);
  const [userError, setUserError] = useState("");

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
          setUserData(data.user);
        } else {
          setUserError(data.message);
        }
      });
  }, []);

  const [isGridLayout, setIsGridLayout] = useState(false);

  return (
    <>
      <Navbar isGridLayout={isGridLayout} setIsGridLayout={setIsGridLayout} />
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-20 my-6 sm:my-10">
        <h2 className="text-lg sm:text-xl md:text-2xl">
          Hi, {userData ? userData.username : ""} 👋
        </h2>
        <div className="flex items-center gap-2">
          <div className="inputBox !bg-[#202020] mt-4">
            <input
              onChange={(e) => {
                setProjTitle(e.target.value);
              }}
              value={projTitle}
              type="text"
              placeholder="Project Title"
            />
          </div>
          <button
            onClick={() => setIsCreateModelShow(true)}
            className="btnBlue rounded-[5px] text-sm sm:text-lg !p-2 !px-4"
          >
            +
          </button>
        </div>
      </div>

      {/* Project Display */}
      <div className="cards">
        {isGridLayout ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-20">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <GridCard key={index} item={item} />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://media.tenor.com/q-i8fNYj6toAAAAM/spongebob-rainbow.gif"
                  alt="No projects"
                  className="w-40 sm:w-60"
                />
                <p>No projects found</p>
              </div>
            )}
          </div>
        ) : (
          <div className="list px-4 sm:px-8 lg:px-20">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <ListCard key={index} item={item} />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center mt-7">
                <img
                  src="https://media.tenor.com/q-i8fNYj6toAAAAM/spongebob-rainbow.gif"
                  width="200"
                  height="200"
                  alt="No projects"
                />
                <p className="mt-7 font-bold text-lg sm:text-xl md:text-2xl">
                  No projects found
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal for Creating a New Project */}
      {isCreateModelShow && (
        <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex items-center justify-center">
          <div className="createModel w-[90vw] max-w-[500px] h-auto shadow-lg bg-[#141414] rounded-[10px] p-6">
            <h3 className="text-lg sm:text-2xl">Create New Project</h3>
            <div className="inputBox !bg-[#202020] mt-4">
              <input
                onChange={(e) => setProjTitle(e.target.value)}
                value={projTitle}
                type="text"
                placeholder="Project Title"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={createProj}
                className="btnBlue w-full rounded-[5px] p-2 text-sm sm:text-lg"
              >
                Create
              </button>
              <button
                onClick={() => setIsCreateModelShow(false)}
                className="btnBlue !bg-[#1A1919] w-full rounded-[5px] p-2 text-sm sm:text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
