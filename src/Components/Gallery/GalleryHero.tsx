"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GalleryHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section
            ref={containerRef}
            className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white font-[family-name:var(--font-absans)]"
        >
            <motion.div
                style={{ y, opacity, scale }}
                className="text-center z-10 px-4"
            >
                <div className="flex items-center justify-center gap-4 mb-8">
                    <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.6em]">
                        Visual Chronicles
                    </span>
                    <div className="w-12 h-[1px] bg-[#da2929]/20" />
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-gray-900 tracking-[-0.05em] leading-[0.9] mb-8">
                    Capturing <br />
                    <span className="text-[#da2929]">Success Stories.</span>
                </h1>

                <p className="max-w-4xl mx-auto text-gray-400 font-medium text-lg leading-relaxed">
                    A visual journey through the milestones, breakthroughs, and life-changing moments of our candidates across the world's most prestigious institutions.
                </p>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <span className="absolute -top-20 -left-20 text-[30rem] font-black text-gray-900 leading-none tracking-tighter">
                    GALLERY
                </span>
            </div>
        </section>
    );
};

export default GalleryHero;
