import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./routes/register/register";
import HomePage from "./routes/homePage/homePage";

function App() {
  return (
    <Router>
      {/* Navbar stays fixed */}
      <Navbar />

      {/* Add top padding to avoid overlap */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
