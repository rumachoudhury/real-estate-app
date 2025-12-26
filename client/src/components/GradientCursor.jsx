// import React, { useEffect } from "react";

// export default function GradientCursor() {
//   useEffect(() => {
//     const cursor = document.createElement("div");
//     cursor.style.position = "fixed";
//     cursor.style.width = "30px";
//     cursor.style.height = "30px";
//     cursor.style.borderRadius = "50%";
//     cursor.style.background = "rgba(96,165,250,0.7)";
//     cursor.style.pointerEvents = "none";
//     cursor.style.zIndex = "9999";
//     cursor.style.transform = "translate(-50%, -50%)";

//     document.body.appendChild(cursor);

//     const move = (e) => {
//       cursor.style.left = e.clientX + "px";
//       cursor.style.top = e.clientY + "px";
//     };

//     window.addEventListener("mousemove", move);

//     return () => {
//       cursor.remove();
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return null;
// }
// ---------------------
import React, { useEffect, useState } from "react";

export default function GradientCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: mouse.x,
        top: mouse.y,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #3b82f6, #60a5fa)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    ></div>
  );
}
