import React, { useContext, useEffect } from "react";
import List from "../components/List";
import Chat from "../components/Chat";
import { gsap } from "gsap";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      // Clear frontend auth FIRST (always)
      // localStorage.removeItem("user");
      await apiRequest.post("/auth/logout");
      updateUser(null);
      // delete apiRequest.defaults.headers.common["Authorization"];

      // Navigate immediately
      navigate("/");

      // Call backend logout (optional)
      await apiRequest.post("/auth/logout");
    } catch (error) {
      console.log("Logout API failed, but user is logged out locally", error);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      //using gsap to animate the profile heading)
      ".profile-heading",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="profilePage flex flex-col lg:flex-row bg-red-100 lg:bg-gray-50 min-h-screen">
      {/* LEFT: PROFILE DETAILS */}
      <div className="details w-full lg:w-2/3">
        <div className="wrapper flex flex-col gap-5 p-4 sm:p-6 lg:p-8">
          {/* USER INFO */}
          <div className="title flex flex-col sm:flex-row justify-between gap-3 p-4">
            <h1 className="uppercase text-xl text-gray-800 profile-heading opacity-0">
              User Information
            </h1>
            {/* <Link to="/profile/update">
              <button className="bg-amber-100 text-sm font-semibold px-4 py-2 rounded">
                Update Profile
              </button>
            </Link> */}
            <Link
              to="/profile/update"
              className="bg-amber-100 text-sm font-semibold px-4 py-2 rounded"
            >
              Update Profile
            </Link>
          </div>

          <div className="info flex flex-col gap-3 text-sm p-4">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Avatar:</span>
              <img
                // src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                src={currentUser.avatar || "/noavatar.jpg"}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            <span>
              Username: <strong>{currentUser.username}</strong>
            </span>
            <span>
              E-mail: <strong>{currentUser.email}</strong>
            </span>

            <button
              onClick={handleLogout}
              className="w-[100px] bg-teal-300 border-0 p-1 cursor-pointer rounded-md"
            >
              Logout
            </button>
          </div>

          {/* MY LIST */}
          <div className="title flex flex-col sm:flex-row justify-between gap-3 p-4">
            <h1 className="text-xl font-semibold">My List</h1>
            <Link to="/add">
              <button className="bg-amber-100 text-sm font-semibold px-4 py-2 rounded">
                Create New Post
              </button>
            </Link>
          </div>

          <List />

          {/* SAVED LIST */}
          <div className="title p-4">
            <h1 className="text-xl font-semibold">Saved List</h1>
          </div>

          <List />
        </div>
      </div>

      {/* RIGHT: CHAT */}
      <div className="chatContainer w-full lg:w-1/3 border-t lg:border-t-0 lg:border-l">
        <div className="wrapper p-4 lg:p-6">
          <Chat />
        </div>
      </div>
    </div>
  );
}
