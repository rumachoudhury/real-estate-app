import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

export default function ProfileUpdatePage() {
  const [avatar, setAvatar] = useState([]);
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(
      formData.entries()
    ); //fromEntries use to convert formData to object

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || "Profile update failed");
    }
  };
  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 px-4 flex flex-col lg:flex-row gap-10 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <motion.h1
          //  className="text-2xl font-semibold text-center mb-6"

          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6"
        >
          Update Your Profile
        </motion.h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue={currentUser.username}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue={currentUser.email}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Button */}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-blue-600 text-white py-2 rounded-md  hover:bg-blue-700 transition"
          >
            Update Profile
          </motion.button>
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </form>
      </div>

      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
      </div>
    </div>
  );
}
