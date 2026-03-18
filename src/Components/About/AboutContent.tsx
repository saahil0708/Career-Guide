"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutContent = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const svgY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const svgRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
    const textX = useTransform(scrollYProgress, [0, 1], ["35%", "-40%"]);

    return (
        <section ref={containerRef} className="relative pt-12 pb-32 bg-[#fafafa] overflow-hidden font-[family-name:var(--font-absans)]">
            {/* Massive Background Text for Depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden h-full">
                <motion.span 
                    style={{ x: textX }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 text-[25vw] font-black text-gray-900/[0.03] leading-none whitespace-nowrap uppercase tracking-tighter"
                >
                    Since 2005
                </motion.span>
            </div>

            {/* Atmospheric Decorative Elements */}
            <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#da2929]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#da2929]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <div className="flex flex-col items-start gap-1 mb-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="px-4 py-1.5 flex items-center gap-2 mb-4"
                            >
                                <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                                    About Us
                                </span>
                                <div className="w-12 h-[1px] bg-[#da2929]/20" />
                            </motion.div>

                            <h1 className="text-5xl lg:text-[4rem] font-black text-gray-900 tracking-[-0.05em] leading-[1.1] mb-8">
                                Guiding Your
                                <span className="text-[#da2929]"> Academic</span> <br />
                                Path to Excellence.
                            </h1>
                        </div>

                        <div className="space-y-8 text-gray-500 text-lg lg:text-xl font-medium leading-[1.6] max-w-2xl">
                            <p className="border-l-2 border-[#da2929]/10 pl-8">
                                Since our inception, <span className="text-[#da2929] font-bold">Global Success Consultancy</span> has been at the forefront of educational transformation. We specialize in connecting ambitious students with world-class universities.
                            </p>
                            <p className="pl-8">
                                Our team of <span className="text-gray-900 font-bold">expert counselors</span> brings decades of collective experience, offering personalized roadmaps that go beyond mere admissions.
                            </p>
                        </div>

                        {/* Stats / Proof Points */}
                        {/* <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                            {[
                                { label: "Success Rate", value: "98%" },
                                { label: "Placements", value: "15k+" },
                                { label: "Partners", value: "500+" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                >
                                    <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Side: Animated SVG & Decorative Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        {/* Geometric Accents */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-[#da2929]/10 rounded-tr-[3rem]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-[#da2929]/10 rounded-bl-[3rem]" />

                        <div className="relative w-full aspect-square max-w-[600px] z-10 scale-110">
                            <Image
                                src="/svg/About us page-bro.svg"
                                alt="About Us Illustration"
                                fill
                                className="object-contain drop-shadow-[0_40px_80px_rgba(218,41,41,0.08)]"
                                priority
                            />
                        </div>

                        {/* Floating Interaction Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#da2929]/10 flex items-center justify-center text-[#da2929]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div className="pr-4">
                                <div className="text-xs font-black text-gray-900 uppercase">Verified</div>
                                <div className="text-[10px] text-gray-400 font-bold">Expert Guidance</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutContent;
