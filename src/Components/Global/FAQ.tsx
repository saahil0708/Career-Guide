"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: "What makes your counseling methodology unique?",
        answer: "We blend data-driven insights with human empathy. Our methodology doesn't just look at market trends; it focuses on long-term career fulfillment. We provide a roadmap that includes skill development, networking strategies, and placement support."
    },
    {
        question: "Do you provide support for international career transitions?",
        answer: "Yes, we have specialized modules for candidates looking to move across borders. This includes visa guidance, cultural orientation, and connecting you with recruiters in your target country."
    },
    {
        question: "How long does the mentorship program typically last?",
        answer: "Most of our comprehensive programs range from 3 to 6 months. However, we also offer 'Sprint' sessions for immediate needs like interview preparation or resume overhauls if you're in a time-sensitive transition."
    },
    {
        question: "Are the sessions available in person or online?",
        answer: "Both. While we have physical centers in major cities, our robust digital platform allows students from all over the world to access the same quality of mentorship through interactive virtual environments."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-gray-50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: SVG Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                            <Image
                                src="/svg/Problem solving-cuate.svg"
                                alt="Career Support Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Interactive floating element for premium feel */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-24 h-24 bg-red-100/30 rounded-full blur-2xl"
                        />
                    </motion.div>

                    {/* Right Side: Questions */}
                    <div className="flex flex-col">
                        <div className="mb-12">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-[#da2929] font-black uppercase tracking-[0.3em] text-xs mb-4"
                            >
                                FAQ
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter"
                            >
                                Answers for your <span className="text-[#da2929]">Ambitions.</span>
                            </motion.h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group rounded-3xl border transition-all duration-300 ${activeIndex === index
                                            ? "border-[#da2929]/20 bg-white shadow-[0_20px_40px_-15px_rgba(218,41,41,0.08)]"
                                            : "border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className="w-full text-left p-6 lg:p-8 flex items-center justify-between"
                                    >
                                        <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeIndex === index
                                                ? "bg-[#da2929] border-[#da2929] text-white rotate-180"
                                                : "border-gray-200 text-gray-400 group-hover:border-[#da2929]/50 group-hover:text-[#da2929]"
                                            }`}>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                                    <p className="text-gray-500 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
