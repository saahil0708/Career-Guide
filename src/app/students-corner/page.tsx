"use client";

import StudentsHero from "@/Components/Students/StudentsHero";
import StudentGrid from "@/Components/Students/StudentGrid";
import { motion } from "framer-motion";

export default function StudentsPage() {
    return (
        <main className="min-h-screen bg-white">
            <StudentsHero />
            
            {/* Transition Divider */}
            <div className="relative h-24 bg-[#fafafa]">
                <div className="absolute inset-0 bg-white rounded-t-[5rem] translate-y-12" />
            </div>

            <StudentGrid />
            
            {/* CTA Section */}
            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-[-0.03em] mb-8">
                            Ready to be our next <br />
                            <span className="text-[#da2929]">Global Scholar?</span>
                        </h2>
                        <button className="px-10 py-5 bg-[#da2929] text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-black transition-colors duration-500 shadow-xl shadow-[#da2929]/20 hover:shadow-black/20">
                            Apply for Consultation
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
