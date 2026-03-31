import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    // minPrice: searchParams.get("minPrice") || 0,
    // maxPrice: searchParams.get("maxPrice") || 10000000,
    // bedroom: searchParams.get("bedroom") || 1,

    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    const cleanedQuery = {};

    Object.keys(query).forEach((key) => {
      if (query[key] !== "" && query[key] !== 0) {
        cleanedQuery[key] = query[key];
      }
    });

    setSearchParams(cleanedQuery);
    // setSearchParams(query);
  };

  return (
    <div className="">
      <h1 className="font-semibold text-3xl mb-6">
        Search results for <strong>{searchParams.get("city")}</strong>
      </h1>

      <div className="flex flex-col w-full p-6 bg-white shadow-sm rounded-xl">
        {/* Location on Top */}
        <div className="  mb-6 flex flex-col items-left gap-4">
          <label htmlFor="city" className="font-medium w-32">
            Location
          </label>

          <input
            className="border rounded-lg p-3 w-full max-w-lg"
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>

        {/* Other Filters Below */}
        <div className="flex flex-wrap gap-6">
          {/* Type */}
          <div className="flex flex-col w-40">
            <label htmlFor="type" className="font-medium mb-1">
              Type
            </label>
            <select
              onChange={handleChange}
              defaultValue={query.type}
              className="border rounded-lg p-3"
              name="type"
              id="type"
            >
              <option value="">Any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Property */}
          <div className="flex flex-col w-40">
            <label htmlFor="property" className="font-medium mb-1">
              Property
            </label>
            <select
              className="border rounded-lg p-3"
              name="property"
              id="property"
              onChange={handleChange}
              defaultValue={query.property}
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* Min Price */}
          <div className="flex flex-col w-40">
            <label htmlFor="minPrice" className="font-medium mb-1">
              Min Price
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.minPrice}
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col w-40">
            <label htmlFor="maxPrice" className="font-medium mb-1">
              Max Price
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.maxPrice}
            />
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col w-40">
            <label htmlFor="bedroom" className="font-medium mb-1">
              Bedrooms
            </label>
            <input
              className="border rounded-lg p-3"
              type="number"
              id="bedroom"
              name="bedroom"
              placeholder="Any"
              onChange={handleChange}
              defaultValue={query.bedroom}
            />
          </div>
          <div>
            <button
              onClick={handleFilter}
              className="border   p-3 mt-6   bg-amber-500  rounded-lg"
            >
              <img src="/search.png" alt="search" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
