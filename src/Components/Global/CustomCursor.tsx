"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setIsHovering(true);
        setCursorType("pointer");
      } else if (target.closest("[data-cursor='card']")) {
        setIsHovering(true);
        setCursorType("card");
      } else {
        setIsHovering(false);
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#da2929] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 border-[1.5px] border-[#da2929] rounded-full pointer-events-none z-[9998]"
        animate={{
          width: cursorType === "pointer" ? 64 : cursorType === "card" ? 100 : 32,
          height: cursorType === "pointer" ? 64 : cursorType === "card" ? 100 : 32,
          opacity: isHovering ? 0.6 : 0.3,
          backgroundColor: cursorType === "pointer" ? "rgba(218, 41, 41, 0.1)" : "rgba(218, 41, 41, 0)",
        }}
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
