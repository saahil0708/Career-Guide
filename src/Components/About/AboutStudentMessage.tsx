"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const AboutStudentMessage = memo(() => {
    return (
        <section className="py-10 pb-24 bg-gray-50 overflow-hidden font-[family-name:var(--font-absans)] relative">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#da2929]/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gray-50 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-4 mb-10">
                            <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.6em]">
                                Our Promise to You
                            </span>
                            <div className="w-12 h-[1px] bg-[#da2929]/20" />
                        </div>

                        <blockquote className="text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.04em] leading-[1.1] italic">
                             "Your <span className="text-[#da2929]">ambition</span> is the blueprint of the future; we are merely the <span className="text-[#da2929]">architects</span> of your global stage."
                        </blockquote>
                        
                        <div className="mt-16 flex flex-col items-center">
                            {/* <div className="w-1.5 h-1.5 rounded-full bg-[#da2929] mb-4" /> */}
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
                                Empowering the next generation
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

AboutStudentMessage.displayName = "AboutStudentMessage";

export default AboutStudentMessage;
