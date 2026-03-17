"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AboutCTA = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden font-[family-name:var(--font-absans)]">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-[#da2929] rounded-[30px] lg:rounded-[3rem] p-10 lg:p-20 overflow-hidden shadow-[0_40px_80px_-15px_rgba(218,41,41,0.3)]"
                >
                    {/* Background Decor Elements */}
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-white opacity-[0.03] rotate-12 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-white opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute top-[-20%] right-[-5%] w-[30rem] h-[30rem] bg-black opacity-[0.1] rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-white/60 font-black text-[10px] uppercase tracking-[0.5em] mb-6"
                        >
                            Your Future Starts Here
                        </motion.span>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl lg:text-7xl font-black text-white tracking-[-0.05em] leading-[0.9] mb-8"
                        >
                            Ready to Shape Your <span className="text-white/80 italic">Future?</span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/90 text-lg lg:text-2xl font-medium mb-12 max-w-3xl leading-relaxed"
                        >
                            Join thousands of successful students who have transformed their lives with our expert guidance. Let's build your global career together.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
                        >
                            {/* Email Link */}
                            <Link 
                                href="mailto:career@support.com"
                                className="group flex items-center gap-4 text-white transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#da2929] transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-0.5">Email Us</p>
                                    <p className="text-lg font-bold">career@support.com</p>
                                </div>
                            </Link>

                            <div className="hidden lg:block h-12 w-px bg-white/10" />

                            {/* WhatsApp Link */}
                            <Link 
                                href="https://wa.me/1234567890"
                                className="group flex items-center gap-4 text-white transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-green-500 transition-all duration-300 shadow-lg">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.631 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-0.5">WhatsApp</p>
                                    <p className="text-lg font-bold">+1 (234) 567 890</p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative bottom element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;
