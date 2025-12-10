import React from "react";

import SearchBar from "../../components/SearchBar.jsx";
import GradientCursor from "../../components/GradientCursor.jsx";

function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-24 sm:pt-32 text-center md:text-left">
      <GradientCursor />
      {/* Left Side - Text Section */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to RealEstatePro
        </h1>

        <p className="text-gray-600 text-md leading-relaxed max-w-md">
          Find your dream home, explore top-rated properties, and connect with
          trusted agents — all in one place. Your perfect property is just a
          click away!
        </p>
        <div className="">
          <SearchBar />
        </div>

        {/* Stats Boxes */}
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
      <div className="flex justify-center w-full mt-8 lg:mt-0">
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
