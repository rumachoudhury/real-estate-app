import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import AnimatedButton from "../../components/AnimatedButton";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useEffect } from "react";

gsap.registerPlugin(TextPlugin);

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsLoading(true);
    setError("");

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //GSAP USE FROM HERE
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      duration: 2,
      text: "Create Your Account to Get Started",
      ease: "none",
    });
  }, []);

  // ----------
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 2 }}
      className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-8 md:px-10 lg:px-20 pt-24 sm:pt-28 md:pt-32"
    >
      {/* Left side: Form */}
      <div className="flex w-full md:w-1/2 justify-center">
        <form
          className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl"
          onSubmit={handleSubmit}
        >
          <h1
            ref={titleRef}
            // className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-black"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 
             text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Create an Account
          </h1>

          <div className="flex flex-col gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {/* <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300 disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button> */}

            <AnimatedButton isLoading={isLoading} />
            {error && (
              <span className="text-red-500 text-sm text-center">{error}</span>
            )}

            <Link
              className="text-blue-500 mt-2 text-center text-sm underline hover:text-blue-700"
              to="/login"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src="/bg.png"
          alt="Modern house exterior"
          className="rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-cover shadow-lg"
        />
      </div>
    </motion.div>
  );
}

export default Register;
