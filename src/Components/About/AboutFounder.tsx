"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutFounder = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const frameY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="py-24 bg-gray-50 overflow-hidden font-[family-name:var(--font-absans)]">
      <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Founder Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] bg-white group"
            >
              <motion.div className="absolute inset-0 scale-110" style={{ y: portraitY }}>
                <Image
                  src="https://image.lexica.art/full_jpg/c1d58d7a-6385-41d3-9e69-dc0d8f020a51"
                  alt="Founder Portrait"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  priority
                />
              </motion.div>
              {/* Subtle Overlay Grad */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
              
            </motion.div>
            
            {/* Decorative Offset Frame */}
            <motion.div style={{ y: frameY }} className="absolute -top-6 -right-6 w-3/4 h-3/4 border border-[#da2929]/5 rounded-[3rem] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(218,41,41,0.03),transparent_70%)] pointer-events-none -z-20" />
          </div>

          {/* Right: Founder Message */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.6em]">
                  The Founder's Voice
                </span>
                <div className="w-16 h-[1px] bg-[#da2929]/20" />
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.04em] leading-[1.05] mb-10">
                "Real success is <span className="text-[#da2929]">built on</span> <br />
                <span className="italic">strategy,</span> not just chance."
              </h2>

              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#da2929] to-transparent opacity-20" />
                <div className="space-y-6 text-gray-500 text-lg font-medium leading-[1.7] max-w-2xl pl-4">
                  <p>
                    At <span className="text-[#da2929] font-bold">Global Success Consultancy</span>, we believe that every student's ambition deserves an architect. My vision was to create a sanctuary where academic dreams are nurtured with precision and absolute transparency.
                  </p>
                  <p>
                    From Ivy League aspirations to innovative European research, we don't just bridge borders—we break down the barriers of uncertainty, one success story at a time.
                  </p>
                </div>
              </div>

              <div className="mt-14 pt-10 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                    Dr. Sarah Alistair
                  </h4>
                  <p className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.4em] mt-2">
                    Founder & Executive Director
                  </p>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">Authored by</p>
                    <p className="font-serif italic text-xl text-gray-800 tracking-tight">Sarah Alistair</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center p-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                    <div className="w-full h-full bg-[#da2929]/10 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
