import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
import { motion } from "motion/react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  // const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      console.log("Logout request sent");

      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
        >
          <motion.h1
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6"
            initial={{ opacity: 0, y: -20 }} // start slightly above, invisible
            animate={{ opacity: 1, y: 0 }} // move to position and become visible
            transition={{ duration: 0.8 }} // animation duration
          >
            Welcome Back
          </motion.h1>

          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          <p className="text-sm text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Image Section */}
      {/* <div
        className="hidden md:block md:w-1/2 min-h-screen bg-cover bg-center mr-0 md:mr-24 "
      >
        <img
          src="/bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src="/bg.png"
          alt="Background"
          className="max-h-[100vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Login;
