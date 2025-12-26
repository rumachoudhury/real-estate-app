import React, { useState } from "react";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true); // track if slider is open

  const prevImage = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); //  if at first image, go to last
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 1 : prev + 1)); // if at last image, go to first
  };

  if (!isOpen) return null; // hide slider when closed

  return (
    <div className="relative flex flex-col gap-4">
      {/* Big image with arrows */}
      <div className="relative w-full">
        <img
          src={images[imageIndex]}
          alt={`main-${imageIndex}`}
          onClick={() => setIsOpen(true)}
          className="w-full h-96 md:h-[500px] object-cover rounded-lg cursor-pointer"
        />

        {/* Arrows */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
          <button
            onClick={prevImage}
            className="bg-black p-2 rounded-full shadow text-amber-400"
          >
            {/* left arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="bg-black p-2 rounded-full shadow text-amber-400"
          >
            {/* right arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Close button */}
        <div
          onClick={() => setIsOpen(false)} // <- important to close slider
          className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer hover:bg-opacity-70"
        >
          X
        </div>
      </div>

      {/* Small images */}
      <div className="flex flex-row gap-2 flex-wrap mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`preview-${index}`}
            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
              imageIndex === index ? "border-amber-500" : "border-transparent"
            }`}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
