"use client";

import { motion } from "framer-motion";

const ContactMap = () => {
    return (
        <section className="py-24 bg-gray-50 font-[family-name:var(--font-absans)]">
            <div className="max-w-[1450px] mx-auto px-6 lg:px-20">
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#da2929] font-black text-[10px] uppercase tracking-[0.5em]">
                            Our Presence
                        </span>
                        <div className="w-8 h-[1px] bg-[#da2929]/30" />
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-[-0.04em] text-center">
                        Global <span className="text-[#da2929]">Reach.</span>
                    </h2>
                </div>

                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden border border-gray-100 bg-gray-50 group">
                    {/* Placeholder for Map - Using an embed for demo purposes */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90326442651!2d-0.12775829999999997!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon!5e0!3m2!1sen!2suk!4v1710712345678!5m2!1sen!2suk"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="transition-all duration-700 group-hover:filter-none group-hover:opacity-100"
                    />

                    {/* Overlay Info Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="absolute bottom-10 left-10 p-8 lg:p-10 bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-2xl max-w-sm"
                    >
                        <span className="text-[#da2929] font-black text-[9px] uppercase tracking-[0.4em] mb-4 block">Headquarters</span>
                        <h4 className="text-2xl font-black text-gray-900 mb-2">Central London Office</h4>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                            123 Strategic Way, West End, <br /> London, United Kingdom, SW1A 1AA
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                <span className="text-[#da2929]">E:</span> contact@globalsuccess.com
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                                <span className="text-[#da2929]">P:</span> +44 (20) 7946 0000
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rounded-bl-[4rem] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;
