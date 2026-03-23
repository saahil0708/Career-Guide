"use client";

import { useEffect, useState, useCallback, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = memo(() => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  const moveMouse = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const handleHoverStart = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    const interactive = target.closest("button, a, [data-cursor='pointer']");
    const card = target.closest("[data-cursor='card']");

    if (interactive) {
      setIsHovering(true);
      setCursorType("pointer");
    } else if (card) {
      setIsHovering(true);
      setCursorType("card");
    } else {
      setIsHovering(false);
      setCursorType("default");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", moveMouse, { passive: true });
    window.addEventListener("mouseover", handleHoverStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [moveMouse, handleHoverStart]);

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
});

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
