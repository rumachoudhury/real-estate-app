import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedRooms: parseInt(inputs.bedroom),
          bathRooms: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetails: {
          description: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      //   console.log(err);
      console.log("API Error:", err.response ? err.response.data : err);
      setError("Failed to create post.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-gray-50 min-h-screen justify-between">
      {/* Form Container */}
      {/* <div className="flex-1 bg-white p-12 md:p-24 rounded-lg  pl-4 md:pl-8"> */}
      <div className="flex-1 bg-white p-6 md:p-12 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Add New Post</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="font-medium mb-1">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="font-medium mb-1">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="font-medium mb-1">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="desc" className="font-medium mb-1">
              Description
            </label>

            {/* use React Quill for rich text editor */}
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="h-40 md:h-60"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="city" className="font-medium mb-1">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          {/* Bedroom / Bathroom */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="bedroom" className="font-medium mb-1">
                Bedroom
              </label>
              <input
                id="bedroom"
                name="bedroom"
                type="number"
                min={1}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="bathroom" className="font-medium mb-1">
                Bathroom
              </label>
              <input
                id="bathroom"
                name="bathroom"
                type="number"
                min={1}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>

          {/* Latitude / Longitude */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="latitude" className="font-medium mb-1">
                Latitude
              </label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="longitude" className="font-medium mb-1">
                Longitude
              </label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>

          {/* Type / Property */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="font-medium mb-1">Type</label>
              <select
                name="type"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-medium mb-1">Property</label>
              <select
                name="property"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>

          {/* Other Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-medium mb-1">Income</label>
              <input
                name="income"
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium mb-1">Size (sqft)</label>
              <input
                name="size"
                type="number"
                min={0}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">School</label>
              <input
                name="school"
                type="number"
                min={0}
                id="school"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Bus</label>
              <input
                name="bus"
                type="number"
                min={0}
                id="bus"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Restaurant</label>
              <input
                name="restaurant"
                type="number"
                min={0}
                id="restaurant"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Add
          </button>

          {error && <span className="text-red-500 mt-2 block">{error}</span>}
        </form>
      </div>

      {/* Side Container */}
      <div
        className="flex-1 flex flex-col gap-4 
                mt-8 md:mt-0
                px-4 md:px-8 lg:px-12"
      >
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            className="w-full max-h-60 object-cover rounded mt-4 "
          />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
