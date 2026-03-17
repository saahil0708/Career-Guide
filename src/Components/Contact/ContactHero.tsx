"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactHero = () => {
    return (
        <section className="relative min-h-[90vh] bg-gray-50 font-[family-name:var(--font-absans)] pt-16 pb-20">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-20 mb-20 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                        Connect With Us
                    </span>
                    <div className="w-12 h-[1px] bg-[#da2929]/20" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-[-0.05em] leading-[0.9] text-center mb-6">
                    Let's Shape Your <span className="text-[#da2929]">Future.</span>
                </h1>
                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-2xl text-center">
                    Have questions about your global education journey? Our experts are here to provide tailored strategic guidance.
                </p>
            </div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                
                {/* Left side: New SVG Illustration */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start"
                >
                    <div className="relative aspect-square w-full max-w-[550px]">
                        <Image 
                            src="/svg/Mention-cuate.svg"
                            alt="Contact Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </motion.div>

                {/* Right side: Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="bg-white p-8 lg:p-12 rounded-[2rem] border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.04)]"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Desired Program</label>
                            <div className="relative">
                                <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 appearance-none cursor-pointer">
                                    <option>Undergraduate Studies</option>
                                    <option>Masters / Post-Grad</option>
                                    <option>MBA Programs</option>
                                    <option>PhD & Research</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 1l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-4">Your Message</label>
                            <textarea 
                                rows={4}
                                placeholder="Tell us about your academic goals..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 outline-none focus:border-[#da2929]/30 focus:bg-white transition-all font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                            />
                        </div>

                        <button className="w-full group relative overflow-hidden bg-gray-900 text-white rounded-lg py-5 transition-transform active:scale-[0.98]">
                            <div className="absolute inset-0 bg-[#da2929] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em]">Send Message</span>
                        </button>

                        <p className="text-center text-[10px] text-gray-300 font-medium">
                            By submitting, you agree to our <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-gray-400 transition-colors">Terms of Service</span>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;
