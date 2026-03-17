"use client";

import { motion } from "framer-motion";

const STAGGER = 0.15;
const DURATION = 1.2;

const PageTransition = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] flex">
      {/* 5 Staggered bars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: DURATION,
            ease: [0.76, 0, 0.24, 1],
            delay: i * STAGGER,
          }}
          className="relative h-full w-full bg-[#7a1212] origin-top"
        />
      ))}

      {/* Reverse bars for entrance */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`in-${i}`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: DURATION,
              ease: [0.76, 0, 0.24, 1],
              delay: i * STAGGER,
            }}
            className="relative h-full w-full bg-[#7a1212] origin-bottom"
          />
        ))}
      </div>
    </div>
  );
};

export default PageTransition;
