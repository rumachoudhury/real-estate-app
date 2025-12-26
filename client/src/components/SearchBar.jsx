import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
    );
  };

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => switchType("buy")}
          className={`px-5 py-2 w-1/2 sm:w-auto font-semibold rounded-l-lg transition-colors duration-300 ${
            query.type === "buy"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => switchType("rent")}
          className={`px-5 py-2 w-1/2 sm:w-auto font-semibold rounded-r-lg transition-colors duration-300 ${
            query.type === "rent"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Rent
        </button>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 bg-gray-100 p-4 rounded-xl"
      >
        <input
          type="text"
          name="city"
          placeholder="City"
          value={query.city}
          onChange={handleChange}
          className="w-full sm:flex-1 md:w-[200px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleChange}
          className="w-full sm:flex-1 md:w-[200px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleChange}
          className="w-full sm:flex-1 md:w-[200px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="w-full sm:w-auto"
        >
          <button
            type="submit"
            className="w-full sm:w-auto bg-yellow-500 text-white px-5 py-2.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors"
          >
            <img src="/search.png" alt="search" className="w-5 h-5" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
