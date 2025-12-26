import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Layout, RequireLayout } from "./routes/layout/Layout"; // import your Layout
import Layout, { RequireAuth } from "./routes/layout/layout";
import Register from "./routes/register/register";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./profilePage/profilePage";
import Login from "./routes/login/login";
import About from "./components/About";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";

function App() {
  console.log("App component rendered"); // safe in Vite + React
  return (
    <Router>
      <Routes>
        {/* All routes wrapped inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* default route for "/" */}
          <Route path="register" element={<Register />} />
          {/* <Route path="/" element={<RequireAuth />} /> */}
          <Route element={<RequireAuth />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/update" element={<ProfileUpdatePage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="listpage" element={<ListPage />} />
          {/* <Route path="about" element={<h1>About Page</h1>} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<h1>Contact Page</h1>} />
          <Route path=":id" element={<SinglePage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
