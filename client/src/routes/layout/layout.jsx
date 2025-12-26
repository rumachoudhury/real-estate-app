import React, { useContext } from "react"; // needed if your setup requires it
import Navbar from "../../components/Navbar";

import { Navigate, Outlet } from "react-router-dom"; // make sure this is here
import { AuthContext } from "../../context/AuthContext";

export default function Layout() {
  return (
    <div className=" layout relative w-full h-screen">
      <Navbar />

      <main className="pt-16">
        <Outlet /> {/* This renders nested routes */}
      </main>
    </div>
  );
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="layout relative w-full h-screen">
      {/*✅ Navbar is not needed here because it's already rendered in the Layout component*/}
      {/* <Navbar />  */}
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
