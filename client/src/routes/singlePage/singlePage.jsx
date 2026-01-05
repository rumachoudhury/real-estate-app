import React from "react";
// import { singlePageData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map.jsx";
import Slider from "../../components/slider/Slider";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SinglePage() {
  const post = useLoaderData();
  const { id } = useParams();
  console.log(id);

  console.log(post);

  return (
    <div className="w-full flex flex-col lg:flex-row items-start gap-10 px-4 md:px-10 py-10 lg:py-16">
      {/* LEFT */}
      <div className="flex flex-col items-center w-full lg:w-2/3">
        {/* Images */}
        <Slider images={post.images || []} />

        {/* Property Info */}
        <div className="text-gray-500 gap-3 flex flex-col items-center mt-5 w-full">
          <div className="flex flex-col md:flex-row gap-6 items-center w-full">
            <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
              <h1 className="font-bold text-2xl text-black">{post.title}</h1>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <img src="/pin.png" alt="" className="w-5 h-5" />
                <span className="text-sm">{post.address}</span>
              </div>

              <div className="text-sm  py-1 px-4 rounded font-semibold inline-block mt-2">
                ${post.price} / month
              </div>
            </div>

            {/* User Card */}
            <div className="flex flex-col items-center p-4 bg-amber-100 rounded-lg shadow-sm w-full md:w-auto mt-4 md:mt-0">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-amber-300 shadow">
                <img
                  src={post.user?.avatar || "/avatar.png"}
                  // alt={post.user?.username || "User"}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <span className="text-center text-black mt-4 text-lg font-medium">
                {post.user?.username || "Unknown User"}
              </span>
            </div>
          </div>

          <div className="mt-5 text-gray-400 text-sm leading-relaxed text-center md:text-left">
            {post.description}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col w-full lg:w-1/3 gap-6 bg-fuchsia-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
          Property Features
        </h2>

        {/* General */}
        <div className="mb-5">
          <p className="text-2xl font-bold mb-2">General:</p>
          <div className="flex flex-col gap-4 shadow-lg w-full p-4 rounded-md">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md">
              <img src="utility.png" alt="" className="w-6 h-6" />
              <p className="font-semibold">Utilities Included</p>
              {post.postDetails?.utilities === "owner" ? (
                <p>Owner is responsible</p>
              ) : (
                <p>Tenant is responsible</p>
              )}
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md">
              <img src="pet.png" alt="" className="w-6 h-6" />
              <div>
                <p className="font-semibold">Pet Policy</p>
                <p className="text-sm">Pet Allowed</p>
                {post.postDetails?.pet === "allowed" ? (
                  <p>Pets are Allowed</p>
                ) : (
                  <p>No Pets Allowed</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md">
              <img src="fee.png" alt="" className="w-6 h-6" />
              <div>
                <p className="font-semibold">Property Fees</p>
                <p className="text-sm">
                  Must have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Room Sizes */}
        <div>
          <p className="font-bold mb-2 text-2xl">Room Size:</p>
          <div className="flex flex-wrap gap-4 shadow-lg w-full p-4 rounded-md">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[120px]">
              <img src="size.png" alt="" className="w-6 h-6" />
              <span>{post.postDetails?.size} sqft</span>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[120px]">
              <img src="bed.png" alt="" className="w-6 h-6" />
              {/* <span>{post.bedroom} bedrooms</span> */}
              <span>{post.bedRooms} Bedrooms</span>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[120px]">
              <img src="bath.png" alt="" className="w-6 h-6" />
              <span className="">{post.bathRooms} Bathroom</span>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div>
          <p className="font-bold mb-2 text-2xl">Nearby Places:</p>
          <div className="flex flex-wrap gap-4 shadow-lg w-full p-4 rounded-md">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[150px]">
              <img src="school.png" alt="School" className="w-6 h-6" />
              <div>
                <span className="font-medium">School</span>
                <p className="text-sm text-gray-500">
                  {post.postDetails?.school}m away
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[150px]">
              <img src="restaurant.png" alt="Restaurant" className="w-6 h-6" />
              <div>
                <span className="font-medium">Restaurant</span>
                <p className="text-sm text-gray-500">
                  {post.postDetails?.restaurant}m away
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 rounded-md flex-1 min-w-[150px]">
              <img src="bus.png" alt="Bus" className="w-6 h-6" />
              <div>
                <span className="font-medium">Bus</span>
                <p className="text-sm text-gray-500">
                  {post.postDetails?.bus}m away
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div>
          <p className="text-2xl font-bold mb-2">Location</p>
          <div className="flex flex-col gap-6 w-full">
            {/* Map */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <Map items={[post]} />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 w-full mt-2">
              <div className="flex flex-1 min-w-[180px] items-center justify-center gap-3 py-2 px-6 rounded-lg bg-amber-300 font-medium shadow hover:bg-amber-400 transition">
                <img src="/chat.png" alt="" className="w-6 h-6" />
                <p>Send a Message</p>
              </div>

              <div className="flex flex-1 min-w-[180px] items-center justify-center gap-3 py-2 px-6 rounded-lg bg-amber-300 font-medium shadow hover:bg-amber-400 transition">
                <img src="/save.png" alt="" className="w-6 h-6" />
                <p>Save The Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
