"use client";

import React, { useEffect, useRef } from "react";

const DotParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw a simple dot
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default DotParticleCanvas;
