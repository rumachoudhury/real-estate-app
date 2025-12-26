import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function GsapAnimation({ children }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return React.Children.map(children, (child, i) =>
    React.cloneElement(child, {
      ref: (el) => (itemsRef.current[i] = el),
    })
  );
}

export default GsapAnimation;
