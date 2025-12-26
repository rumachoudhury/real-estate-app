import { Link } from "react-router-dom";
import React from "react";

import { motion } from "motion/react";
function Card({ item }) {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Card container */}

      <motion.div
        className="flex flex-col md:flex-row gap-4  rounded-lg  bg-white w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image */}
        <Link to={`/${item.id}`} className="flex shrink-0">
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-64 h-40 md:h-40 rounded-lg object-cover cursor-pointer hidden sm:block"
          />
        </Link>

        {/* Text content */}

        <div className="flex flex-col items-start p-2 w-full">
          {/* Title & Address */}
          <div className="space-y-2 items-start flex flex-col">
            <h2 className="font-bold text-lg">
              <Link to={`/${item.id}`} className="hover:underline">
                {item.title}
              </Link>
            </h2>
            <p className="flex items-center text-sm text-gray-500 gap-2">
              <img
                src="/pin.png"
                alt=""
                className="w-5 h-5 object-cover rounded-lg"
              />
              <span>{item.address}</span>
            </p>
            <p className="font-semibold text-md text-left bg-amber-100 inline-block px-2 py-1 rounded">
              ${item.price}
            </p>
          </div>

          {/* Bottom features & icons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            {/* Features */}
            <div className="flex flex-wrap gap-4 items-start ">
              <div className="flex flex-row justify-around items-center gap-2">
                <img src="/bed.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8 " />
                <span className="text-sm sm:text-base">
                  Bedroom: {item.bedrooms}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/bath.png" alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base">
                  Bathroom: {item.bathrooms}
                </span>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 mt-2 sm:mt-0 cursor-pointer">
              <img src="/save.png" alt="" className="w-5 h-5" />
              <img src="/chat.png" alt="" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
