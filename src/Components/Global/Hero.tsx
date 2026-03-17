"use client";

import { motion } from "framer-motion";
import { SplitText } from "./SplitText";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gray-50 overflow-hidden pt-0 pb-5">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-tl from-gray-50 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 w-full mb-10">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-10">
          <motion.h1
            className="text-5xl lg:text-[72px] font-black text-gray-900 leading-tight whitespace-nowrap"
          >
            <SplitText text="Shape Your" delay={0.2} />{" "}
            <SplitText text="Future" className="text-[#da2929]" delay={0.5} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-600 text-lg lg:text-xl max-w-xl leading-relaxed font-medium"
          >
            Unlock your potential with <span className="text-[#da2929] font-bold italic">expert career guidance</span> and personalized mentorship. We bridge the gap between academic knowledge and professional excellence.
          </motion.p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4">
            {[
              { title: "Personalized Counseling", desc: "Expert 1-on-1 sessions" },
              { title: "Skill Assessment", desc: "Map your unique strengths" },
              { title: "Placement Support", desc: "Direct industry connections" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.2, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#da2929]">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{feature.title}</p>
                  <p className="text-xs text-gray-500 font-medium">— {feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="flex gap-x-20 lg:gap-x-36 pt-10 border-t border-gray-100"
          >
            <div>
              <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">5k+</p>
              <p className="text-xs lg:text-sm text-gray-400 uppercase font-bold tracking-[0.2em] mt-2">Mentored</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-[#da2929] tracking-tighter">92%</p>
              <p className="text-xs lg:text-sm text-gray-400 uppercase font-bold tracking-[0.2em] mt-2">Success</p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">50+</p>
              <p className="text-xs lg:text-sm text-gray-400 uppercase font-bold tracking-[0.2em] mt-2">Partners</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content - SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 50, y: 20 }}
          animate={{ opacity: 1, scale: 1.1, x: 0, y: -20 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[650px] aspect-square">
            <Image
              src="/svg/Kindergarten student-bro.svg"
              alt="Illustration"
              fill
              className="object-contain drop-shadow-[0_20px_60px_rgba(218,41,41,0.15)]"
            />

            {/* Interactive Elements Floating around Illustration */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl z-20"
            >
              <div className="w-12 h-1 bg-[#da2929] rounded-full mb-2" />
              <div className="w-8 h-1 bg-gray-200 rounded-full" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -left-10 p-5 rounded-full bg-[#da2929] text-white shadow-2xl z-20 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
