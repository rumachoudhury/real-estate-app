import React from "react";
import "./styles/About.css"; // <-- updated path

export default function About() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-violet-50 to-blue-50">
      <div className="p-8 text-center max-w-xl">
        <h1 className="text-4xl md-text-5xl font-bold mb-4 text-gray-900 ">
          Hello! I'm a Developer
        </h1>
        <p className="mb-8">I'm passionate about building web applications.</p>

        {/* Waving hand using CSS */}
        <span className="wave-hand text-6xl">🤚🏻</span>
      </div>
      {/* /* Animation */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-wave {
          animation: wave 2s infinite;
        }
      `}</style>
    </section>
  );
}
