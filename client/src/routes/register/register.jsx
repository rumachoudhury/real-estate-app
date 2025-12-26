import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
import { motion } from "motion/react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login"); // redirect on success
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 px-4 py-8 md:px-10 lg:px-20 gap-10">
      {/* Form */}
      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl flex flex-col gap-4"
        >
          <motion.h1
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6"
            initial={{ opacity: 0, y: -20 }} // start slightly above, invisible
            animate={{ opacity: 1, y: 0 }} // move to position and become visible
            transition={{ duration: 0.8 }} // animation duration
          >
            Create an account
          </motion.h1>

          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          {error && (
            <span className="text-red-500 text-sm text-center">{error}</span>
          )}

          {/* <Link
            to="/login"
            className="text-blue-500 text-sm text-center mt-2 underline hover:text-blue-700"
          >
            Already have an account? Login
          </Link> */}

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/bg.png"
          alt="Illustration"
          className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg object-cover shadow-lg hidden sm:block"
        />
      </div> */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Register;
