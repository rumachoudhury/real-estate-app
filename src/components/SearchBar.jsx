import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    // Navigate to the list page with query parameters
    navigate(
      `/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
    );
  };

  return (
    <div>
      <h1 className="text-red-500">SearchBar Visible!</h1>
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-2 items-center border p-4 rounded-lg bg-gray-100 shadow"
      >
        <input
          type="text"
          name="city"
          placeholder="City"
          value={query.city}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={query.minPrice}
          onChange={handleChange}
          className="w-24 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={handleChange}
          className="w-24 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <img src="/search.png" alt="" />
    </div>
  );
}

export default SearchBar;
