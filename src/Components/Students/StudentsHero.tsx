"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import Image from "next/image";

const StudentsHero = memo(() => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const textX = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

    return (
        <section ref={containerRef} className="relative pt-16 pb-24 bg-[#fafafa] overflow-hidden font-[family-name:var(--font-absans)]">
            {/* Background Texture & Ornaments */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#da292910 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Floating Narrative Elements */}
            <motion.div
                style={{ x: textX }}
                className="absolute top-20 left-0 text-[25vw] md:text-[15vw] font-black text-gray-900/[0.02] uppercase tracking-[0.2em] whitespace-nowrap select-none pointer-events-none"
            >
                Education • Excellence • Global • Success
            </motion.div>

            <div className="absolute top-40 right-[10%] w-64 h-64 bg-[#da2929]/5 rounded-full blur-[100px] animate-pulse" />

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-3 mb-8">
                            <div className="w-12 h-[2px] bg-[#da2929]" />
                            <span className="text-[#da2929] font-black text-[11px] uppercase tracking-[0.5em]">
                                Student Corner
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-[-0.04em] leading-[1.2] mb-10">
                            Empowering
                            <span className="text-[#da2929] relative block sm:inline">
                                { } Global Ambitions.
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#da2929]/10" />
                            </span>
                        </h1>

                        <p className="max-w-xl mx-auto lg:mx-0 text-gray-500 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-12">
                            A curated showcase of academic excellence and cross-border success stories.
                        </p>
                    </motion.div>

                    {/* Right: SVG Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-full border border-gray-100 -z-10" />
                            <Image
                                src="/svg/Milestones of business projects-bro.svg"
                                alt="Business Milestones Illustration"
                                width={800}
                                height={600}
                                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

StudentsHero.displayName = "StudentsHero";

export default StudentsHero;
