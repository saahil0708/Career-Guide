"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutMission = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const missionX = useTransform(scrollYProgress, [0, 0.4], [-100, 0]);
    const visionX = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const missionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const visionOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="py-24 bg-gray-50 overflow-hidden font-[family-name:var(--font-absans)] border-t border-gray-100">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
                    
                    {/* Mission Card */}
                    <motion.div 
                        style={{ x: missionX, opacity: missionOpacity }}
                        className="bg-white p-12 lg:p-20 group hover:bg-gray-50 transition-colors duration-500"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                                Our Mission
                            </span>
                            <div className="w-8 h-[1px] bg-[#da2929]/30" />
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em] leading-[1.1] mb-8">
                            Democratizing <br />
                            <span className="text-[#da2929]">Global Knowledge.</span>
                        </h3>
                        
                        <p className="text-gray-500 text-base lg:text-lg font-medium leading-relaxed mb-8">
                            To bridge the gap between local talent and global opportunities by providing unparalleled access to world-class educational resources and counseling.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Empowering Local Ambitions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Global Opportunity Bridging</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Integrity-Driven Guidance</span>
                            </div>
                        </div>
                        
                        <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-12 h-1 bg-[#da2929]" />
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div 
                        style={{ x: visionX, opacity: visionOpacity }}
                        className="bg-white p-12 lg:p-20 group hover:bg-gray-50 transition-colors duration-500"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                                Our Vision
                            </span>
                            <div className="w-8 h-[1px] bg-[#da2929]/30" />
                        </div>
                        
                        <h3 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em] leading-[1.1] mb-8">
                            Shaping the <br />
                            <span className="text-[#da2929]">Academic Elite.</span>
                        </h3>
                        
                        <p className="text-gray-500 text-base lg:text-lg font-medium leading-relaxed mb-8">
                            To become the world's most trusted partner for career-shaping educational journeys, fostering a generation of leaders through merit and strategy.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Cultivating Future Leaders</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Strategic Career Excellence</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]" />
                                <span className="text-gray-900 font-bold text-sm">Sustainable Global Impact</span>
                            </div>
                        </div>

                        <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-12 h-1 bg-[#da2929]" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMission;
