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

    return (
        <section ref={containerRef} className="pt-14 pb-20 bg-gray-50 overflow-hidden font-[family-name:var(--font-absans)]">
            {/* Minimal Structural Accent */}
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gray-50 pointer-events-none" />
            
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-4 mb-8">
                            <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                                Our Story & Vision
                            </span>
                            <div className="w-12 h-[1px] bg-[#da2929]/30" />
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-[-0.04em] leading-[0.95] mb-10">
                            Guiding Your Path to <br />
                            <span className="text-[#da2929]">Academic Excellence.</span>
                        </h2>

                        <div className="space-y-6 text-gray-500 text-lg font-medium leading-[1.6] max-w-2xl">
                            <p>
                                Since our inception, <span className="text-[#da2929] italic">Global Success Consultancy</span> has been at the forefront of educational transformation. We specialize in connecting ambitious students with <span className="text-[#da2929] italic">world-class universities</span>, providing a bridge to <span className="text-[#da2929] italic">international opportunities</span> and prestigious careers.
                            </p>
                            <p>
                                Our team of <span className="text-[#da2929] italic">expert counselors</span> brings decades of collective experience, offering <span className="text-[#da2929] italic">personalized roadmaps</span> that go beyond mere admissions.
                            </p>
                        </div>

                        {/* Additional value points to fill space */}
                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                            {["Holistic Mentorship", "Career Coaching", "Visa Assistance", "Scholarship Support"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#da2929]/40" />
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Structured Feature Grid */}
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-gray-50 pt-7">
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#da2929] group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">Admissions Strategy</span>
                                </div>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">Navigating complex global applications with precision and ease.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#da2929] group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span className="text-gray-900 font-extrabold text-sm uppercase tracking-widest">University Network</span>
                                </div>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">Direct, authoritative connections with top institutions worldwide.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Animated SVG */}
                    <motion.div 
                        style={{ y: svgY, rotate: svgRotate }}
                        className="relative hidden lg:flex justify-center items-center"
                    >
                        {/* Soft Brand Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(218,41,41,0.03),transparent_70%)] pointer-events-none -z-10" />
                        
                        <div className="relative w-full aspect-square max-w-[550px]">
                            <Image 
                                src="/svg/About us page-bro.svg" 
                                alt="About Us Illustration" 
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutContent;
