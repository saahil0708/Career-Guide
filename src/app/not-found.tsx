"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-white rounded-b-[60px] md:rounded-b-[90px] py-12 md:py-16">
      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Blobs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-red-50/50 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-red-50/40 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none"
          style={{ backgroundImage: 'radial-gradient(#da2929 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative z-10 text-center space-y-2 md:space-y-4 max-w-4xl w-full flex flex-col items-center">
        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative w-full max-w-[350px] md:max-w-[400px] aspect-square"
        >
          <Image
            src="/svg/404 Error-pana.svg"
            alt="404 Illustration"
            fill
            className="object-contain drop-shadow-[0_20px_60px_rgba(218,41,41,0.15)]"
            priority
          />

          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] w-12 h-12 bg-[#da2929]/5 rounded-xl backdrop-blur-sm border border-red-50 flex items-center justify-center -rotate-12 hidden md:flex"
          >
            <div className="w-4 h-4 rounded-full bg-[#da2929]/20 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-2 md:space-y-4 max-w-2xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Lost in <span className="text-[#da2929]">Opportunity?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-500 text-base md:text-xl font-medium leading-relaxed"
          >
            The path you are looking for seems to have vanished. Let’s get you back on track to your dream career.
          </motion.p>
        </div>
      </div>

      {/* Aesthetic Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
    </div>
  );
}
