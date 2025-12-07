// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Register from "./routes/register/register";
// // import HomePage from "./routes/homePage/HomePage";
// import HomePage from "./routes/homePage/homePage";
// import ListPage from "./routes/listPage/listPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/about" element={<h1>About Page</h1>} />
//         <Route path="/contact" element={<h1>Contact Page</h1>} />
//         <Route path="/listpage" element={<ListPage />} /> {/* ✅ capitalized */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// ----------------------------
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/Layout"; // import your Layout
import Register from "./routes/register/register";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes wrapped inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* default route for "/" */}
          <Route path="register" element={<Register />} />
          <Route path="listpage" element={<ListPage />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="contact" element={<h1>Contact Page</h1>} />
          <Route path="/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
