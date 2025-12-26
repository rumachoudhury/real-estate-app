import React from "react";

import SearchBar from "../../components/SearchBar.jsx";
import GradientCursor from "../../components/GradientCursor.jsx";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-24 sm:pt-32 m-4">
      <GradientCursor />
      {/* Left Side - Text Section */}

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to{" "}
          {/* <motion.span className="text-amber-500">RealEstatePro</motion.span> */}
          <motion.span className="relative inline-block text-amber-400 pb-3">
            RealEstatePro
            <motion.svg
              className="absolute left-0 -bottom-2 w-full"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 6 Q 12 2 25 6 T 50 6 T 75 6 T 100 6"
                fill="transparent"
                stroke="#f59e0b"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.path
                d="M0 8 Q 12 4 25 8 T 50 8 T 75 8 T 100 8"
                fill="transparent"
                stroke="#fbbf24"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              />
            </motion.svg>
          </motion.span>
        </h1>

        <p className="text-gray-600 text-md leading-relaxed max-w-md">
          Find your dream home, explore top-rated properties, and connect with
          trusted agents — all in one place. Your perfect property is just a
          click away!
        </p>
        <div className="">
          <SearchBar />
        </div>

        {/* card Stats Boxes */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-center mt-8 w-full">
          <div className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-600">18+</h1>
            <h2 className="text-gray-700 mt-1 text-center">
              Years of Experience
            </h2>
          </div>

          <div className="flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-green-600">500+</h1>
            <h2 className="text-gray-700 mt-1 text-center">Properties Sold</h2>
          </div>

          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-yellow-600">200+</h1>
            <h2 className="text-gray-700 mt-1 text-center">Happy Clients</h2>
          </div>

          <div className="flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-purple-600">50+</h1>
            <h2 className="text-gray-700 mt-1 text-center">Agents Network</h2>
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      {/* <div className="flex justify-center w-full mt-8 lg:mt-0"> */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/bg.png"
          alt="Modern house exterior"
          className="rounded-2xl w-3/4 sm:w-1/2 md:w-2/3 lg:w-full max-w-md md:max-w-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default HomePage;
