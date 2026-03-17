"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2005",
    title: "The Genesis of a Vision",
    description: "Global Success Consultancy was founded in a small office with a monumental vision: to democratize world-class education for every ambitious student, regardless of their background.",
  },
  {
    year: "2010",
    title: "Expanding Global Horizons",
    description: "We successfully established strategic partnerships with over 50 top-tier universities across Western Europe, creating exclusive pathways for our candidates to excel in international markets.",
  },
  {
    year: "2015",
    title: "Digital Pioneering Phase",
    description: "Recognizing the shift in global communication, we pioneered advanced virtual counseling platforms and automated admission tracking systems, setting a new industry standard for transparency.",
  },
  {
    year: "2020",
    title: "A Decade of Excellence",
    description: "Despite global challenges, we celebrated a milestone of 10,000 successful placements in Ivy League and Russell Group institutions, reaffirming our position as a resilient leader in education.",
  },
  {
    year: "2025",
    title: "Shaping Future Leaders",
    description: "Today, we stand as a global authority in strategic academic guidance. Our focus has evolved beyond admissions to holistic mentorship, shaping the next generation of world-class citizens and leaders.",
  },
];

const AboutJourney = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-10 pb-32 bg-gray-50 overflow-hidden font-[family-name:var(--font-absans)]">
      <div className="max-w-[1450px] mx-auto px-4 lg:px-8 text-center pt-10">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
              The Journey
            </span>
            <div className="w-8 h-[1px] bg-[#da2929]/30" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-[-0.04em] leading-[0.95] mb-6">
            Our Story
            <span className="text-[#da2929]"> Unfolded.</span>
          </h2>
          <p className="max-w-3xl text-gray-400 font-medium text-base lg:text-lg leading-relaxed mb-4">
            From a singular vision to a global network of excellence, explore the milestones that have defined our commitment to empowering student success across the world.
          </p>
        </div>

        {/* Fan Container */}
        <div className="relative h-[480px] lg:h-[500px] flex items-end justify-center perspective-1000">
          {/* Decorative Side Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 select-none pointer-events-none hidden xl:block">
            <span className="text-[12rem] font-black text-gray-900/5 tracking-tighter">2005</span>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 select-none pointer-events-none hidden xl:block">
            <span className="text-[12rem] font-black text-gray-900/5 tracking-tighter">2025</span>
          </div>

          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={milestone.year}
              milestone={milestone}
              index={index}
              totalBlades={milestones.length}
              smoothProgress={smoothProgress}
            />
          ))}

          {/* Pivot Point Graphic */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-16 h-16 bg-white border border-gray-100 rounded-full shadow-xl z-[110] flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#da2929] rounded-full" />
            <div className="absolute inset-0 bg-[#da2929]/5 rounded-full blur-xl" />
          </div>
        </div>

        {/* Interaction Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="mt-40 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400"
        >
          Hover to bring cards to front • Scroll to unfold
        </motion.p>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone, index, totalBlades, smoothProgress }: any) => {
  const centerIndex = (totalBlades - 1) / 2;
  const baseRotation = (index - centerIndex) * 35;

  const rotation = useTransform(smoothProgress, [0.05, 0.4], [0, baseRotation]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  const y = useTransform(smoothProgress, [0.05, 0.4], [30, 0]);
  const x = useTransform(smoothProgress, [0.05, 0.4], [0, (index - centerIndex) * 40]);

  return (
    <motion.div
      style={{
        rotate: rotation,
        opacity,
        y,
        x,
        originX: 0.5,
        originY: 1,
        zIndex: index,
      }}
      whileHover={{
        zIndex: 100,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="absolute bottom-0 w-[260px] lg:w-[320px] aspect-[2/3] bg-white border border-gray-100 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] cursor-pointer transition-colors hover:border-[#da2929]/30 group"
    >
      <div className="h-full flex flex-col justify-between text-left">
        <div>
          <span className="text-4xl lg:text-5xl font-black text-[#da2929]/10 group-hover:text-[#da2929]/20 transition-colors uppercase tracking-tighter">
            {milestone.year}
          </span>
          <h3 className="text-xl lg:text-2xl font-black text-gray-900 mt-4 mb-3">
            {milestone.title}
          </h3>
          <p className="text-sm lg:text-base text-gray-400 font-medium leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutJourney;
