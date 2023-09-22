"use client";
import dip from "../../assets/cover.png";
import Image from "next/image";
import { useState } from "react";
const Home = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e: any) => {
    e.preventDefault();

    // Increase or decrease the zoom level based on the scroll direction
    if (e.deltaY > 0) {
      setZoomLevel((prevZoom) => Math.max(0.5, prevZoom - 0.1));
    } else {
      setZoomLevel((prevZoom) => Math.min(2, prevZoom + 0.1));
    }
  };

  const handleDragStart = (e: any) => {
    e.preventDefault();

    let startX = e.clientX; // Declare as variable
    let startY = e.clientY; // Declare as variable

    const handleMouseMove = (e: any) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      startX = e.clientX; // Update the variable
      startY = e.clientY; // Update the variable
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative overflow-hidden border"
        onWheel={handleWheel}
        onMouseDown={handleDragStart}
        style={{
          width: "1000px",
          height: "100vh",
          cursor: "grab",
        }}
      >
        <Image
          src={dip}
          alt="Zoomable Image"
          className="transform transition-transform"
          style={{
            transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
