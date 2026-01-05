// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { Layout, RequireLayout } from "./routes/layout/Layout"; // import your Layout
// import Layout, { RequireAuth } from "./routes/layout/layout";
// import Register from "./routes/register/register";
// import HomePage from "./routes/homePage/homePage";
// import ListPage from "./routes/listPage/listPage";
// import SinglePage from "./routes/singlePage/singlePage";
// import ProfilePage from "./profilePage/profilePage";
// import Login from "./routes/login/login";
// import About from "./components/About";
// import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
// import NewPostPage from "./routes/newPostPage/newPostPage";
// import singlePageLoader from "./lib/loaders.js";

// function App() {
//   console.log("App component rendered"); // safe in Vite + React
//   return (
//     <Router>
//       <Routes>
//         {/* All routes wrapped inside Layout */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} /> {/* default route for "/" */}
//           <Route path="register" element={<Register />} />
//           <Route element={<RequireAuth />}>
//             <Route path="/profile" element={<ProfilePage />} />
//             {/* <Route path="profile/update" element={<ProfileUpdatePage />} /> */}
//             <Route path="profile/update/:id" element={<ProfileUpdatePage />} />
//             <Route path="/add" element={<NewPostPage />} />
//           </Route>
//           <Route path="login" element={<Login />} />
//           <Route path="listpage" element={<ListPage />} />
//           {/* <Route path="about" element={<h1>About Page</h1>} /> */}
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<h1>Contact Page</h1>} />
//           <Route path="/:id" element={<SinglePage />, loaders: singlePageLoader } />
//           {/* <Route path="/profile" element={<ProfilePage />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// ===============================================================

// We replace:
// ❌ BrowserRouter
// with
// ✅ createBrowserRouter

// 🧠 Real-life example (very simple)

// Think like this:

// 🛒 You go to a shop
// ❌ Old way: Enter shop → then wait for items
// ✅ New way: Items are ready before you enter

// That’s what loader does.

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Import router tools used for loaders

import Layout, { RequireAuth } from "./routes/layout/layout";
import Register from "./routes/register/register";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./profilePage/profilePage";
import Login from "./routes/login/login";
import About from "./components/About";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";

import { singlePageLoader } from "./lib/loaders";

const router = createBrowserRouter([
  //createBrowserRouter used for loaders
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> }, //index: true used for default route
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "listpage", element: <ListPage /> },
      { path: "about", element: <About /> },

      {
        path: ":id",
        // path: "posts/:id",
        element: <SinglePage />,
        loader: singlePageLoader,
      },

      {
        element: <RequireAuth />,
        children: [
          { path: "profile", element: <ProfilePage /> },
          { path: "profile/update/:id", element: <ProfileUpdatePage /> },
          { path: "add", element: <NewPostPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
