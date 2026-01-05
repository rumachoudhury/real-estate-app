import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "motion/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-10">
          {/* Left: Logo and text */}
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                // animate={{ rotate: 360, scale: [1, 2, 1] }}
                // transition={{ duration: 2 }}
                // animate={{ opacity: 1, y: 0 }}
                // initial={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.8 }}
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                src="/logo (2).png"
                alt="Logo"
                className="w-14 h-14"
              />
              <h1 className="font-bold text-3xl">RealEstatePro</h1>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Desktop Links */}
        {currentUser ? (
          <div className="hidden md:flex items-center gap-3 lg:ml-0 md:ml-3 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
            <img
              // src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
              // alt="Profile"

              src={currentUser.avatar || "/noavatar.jpg"} //if user avatar is not available, use default avatar
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold text-sm">
              {currentUser.username || "User"}
            </span>
            <Link
              to="/profile"
              className="relative text-xs font-bold gap-2 hover:underline bg-amber-400 p-2 rounded-full flex items-center"
            >
              {/* Notification badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:flex items-center justify-center gap-6 text-lg">
              <Link to="/signin">SignIn</Link>

              <Link
                to="/signup"
                className="border bg-amber-500 p-1 px-4 rounded-md"
              >
                SignUp
              </Link>
            </div>
          </>
        )}

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/menu.png" alt="Menu" className="w-8 h-8 ml-11" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 text-white flex flex-col gap-4 px-4 py-4">
          {currentUser ? (
            // JSX to show when user exists
            <div className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-sm">John Doe</span>
              <Link
                to="/profile"
                className="relative text-xs font-bold gap-2 hover:underline bg-amber-400 p-2 rounded-full flex items-center"
              >
                {/* Notification badge */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center">
                  3
                </div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            // JSX to show when user does not exist
            <>
              <Link to="/signin" onClick={() => setMenuOpen(false)}>
                SignIn
              </Link>
              <Link
                to="/signup"
                className="border bg-amber-500 p-1 px-4 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                SignUp
              </Link>
            </>
          )}

          {/* Rest of links */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
