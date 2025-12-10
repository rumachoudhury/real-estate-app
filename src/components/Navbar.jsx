import React, { useState } from "react";
import { Link } from "react-router-dom";
import DotParticleCanvas from "../components/DotParticleCanvas";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-10">
          {/* Left: Logo and text */}
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                animate={{ rotate: 360, scale: [1, 2, 1] }}
                transition={{ duration: 2 }}
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
        <div className="hidden md:flex items-center justify-center gap-6 text-lg">
          <Link to="/signin">SignIn</Link>
          <Link
            to="/signup"
            className="border bg-amber-500 p-1 px-4 rounded-md"
          >
            SignUp
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/menu.png" alt="Menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 text-white flex flex-col gap-4 px-4 py-4">
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
        </div>
      )}
    </nav>
  );
}

export default Navbar;
