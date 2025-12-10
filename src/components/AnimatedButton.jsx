import React, { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function AnimatedButton({ isLoading }) {
  const btnRef = useRef();

  const playAnimation = () => {
    const btn = btnRef.current;

    const tl = gsap.timeline();

    tl.to(btn, {
      duration: 1,
      text: { value: "Sending...", type: "diff" },
      ease: "sine.in",
    })
      .to(btn, {
        duration: 0.6,
        text: { value: "Sending", type: "diff" },
        ease: "sine.inOut",
        repeat: 4,
        yoyo: true,
      })
      .to(
        btn,
        {
          text: "Sent!",
          ease: "none",
        },
        "+=0.5"
      );
  };

  // Trigger animation when loading becomes true
  if (isLoading) {
    playAnimation();
  }

  return (
    <button
      ref={btnRef}
      //   className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300"
      className="w-full text-white p-3 rounded-md font-semibold transition-all duration-300
             bg-gradient-to-r from-green-500 to-blue-500
             hover:from-green-600 hover:to-blue-600
             disabled:opacity-50"
      disabled={isLoading}
    >
      Register
    </button>
  );
}

export default AnimatedButton;
