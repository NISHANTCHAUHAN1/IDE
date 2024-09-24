import React from "react";
import Navbar from "../components/Navbar";
import image from "../images/file.png";

const About = () => {
  return (
    <>
      <Navbar />

      {/* <div className="container mx-auto min-h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[100px]">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <img
            className="object-cover rounded-full"
            src={image}
            alt="Nishaant Chauhan"
            width="300" // Adjusted to smaller size for responsiveness
            height="300"
          />
        </div>

        <div className="right lg:w-[55%] w-full text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
             Happay Coding❕
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mt-4">
            Hello, I am Nishant Chauhan from Delhi. You can use this code editor
            to create small projects using HTML, CSS, and JavaScript.
          </p>
          <h1 className="text-lg lg:text-xl text-gray-600 mt-4">
            You can save your code or files using <span className="font-bold text-white">Ctrl + S</span>
          </h1>
        </div>
      </div> */}

<div className="container mx-auto min-h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[50px]">
  {/* Image Section */}
  <div className="lg:w-[40%] w-full flex justify-center lg:justify-start">
    <img
      className="object-cover rounded-lg"
      src={image}
      alt="Nishaant Chauhan"
      width="400" // Adjusted width
      height="400" // Adjusted height
    />
  </div>

  {/* Text Section */}
  <div className="right lg:w-[55%] w-full text-center lg:text-left mt-8 lg:mt-0">
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
      Happy Coding❕
    </h1>
    <p className="text-lg lg:text-xl text-gray-600 mt-4">
      Hello, I am Nishant Chauhan from Delhi. You can use this code editor
      to create small projects using HTML, CSS, and JavaScript.
    </p>
    <h1 className="text-lg lg:text-xl text-gray-600 mt-4">
      You can save your code or files using <span className="font-bold text-green-400">Ctrl + S</span>
    </h1>
  </div>
</div>

    </>
  );
};

export default About;
