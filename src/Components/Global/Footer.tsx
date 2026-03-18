'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full min-h-[500px] md:min-h-[500px] py-16 md:py-20 -z-10 bg-[#da2929] text-white flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Background Decor Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
                {/* Large Centered Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-64 h-24 lg:w-80 lg:h-32 mb-4"
                >
                    <Image
                        src="https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoXRiCpT7zN8RPF5aknr7V4H2CZEIYudsjGSpO"
                        alt="Educareer Logo"
                        fill
                        className="object-contain brightness-0 invert"
                    />
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-md mb-12"
                >
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em]">Subscribe to our Newsletter</p>
                        <form className="flex w-full gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="flex-grow bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 border-none focus:ring-0 focus:outline-none"
                            />
                            <button className="bg-white text-[#da2929] px-6 py-2 rounded-md cursor-pointer text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-all duration-300">
                                Join
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Minimal Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 mb-12">
                    {['Home', 'About Us', 'Gallery', "Students' Corner", 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href="/"
                            className="text-white/80 hover:text-white font-bold tracking-widest uppercase text-xs transition-all duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 w-full flex flex-col items-center gap-4 text-center">
                    <p className="text-white/40 text-[10px] tracking-[0.3em] font-black uppercase">
                        &copy; {new Date().getFullYear()} EDUCAREER. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="text-white/30 hover:text-white text-[9px] tracking-widest uppercase transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/30 hover:text-white text-[9px] tracking-widest uppercase transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
