// import React from "react";
// import Navbar from "../../components/Navbar";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   return (
//     <div>
//       <Navbar />
//       <main className="pt-16">
//         <Outlet /> {/* This will render the nested route components */}
//       </main>
//     </div>
//   );
// }

// ------------------
import React from "react"; // needed if your setup requires it
import Navbar from "../../components/Navbar";

import { Outlet } from "react-router-dom"; // make sure this is here

export default function Layout() {
  return (
    <div className="relative w-full h-screen">
      <Navbar />

      <main className="pt-16">
        <Outlet /> {/* This renders nested routes */}
      </main>
    </div>
  );
}
