"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 z-50 pointer-events-none hidden lg:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(79, 70, 229, 0.4)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.1 }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-50 pointer-events-none hidden lg:block mix-blend-difference" 
        style={{ transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)` }}
      />
    </>
  );
}
