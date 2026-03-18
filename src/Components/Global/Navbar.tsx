"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
        { name: "Students' Corner", href: '/students-corner' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${scrolled
                ? "py-2 bg-gray-50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                : "py-2.5 bg-gray-50"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 flex items-center justify-between">
                <div className="flex items-center gap-2 relative group flex-shrink-0">
                    <div className={`relative overflow-hidden transition-all duration-500 ${scrolled ? 'w-40 h-12' : 'w-56 h-16 lg:w-64 lg:h-18'}`}>
                        <Image
                            src="https://67uzoom719.ufs.sh/f/YNNjoMX3eGAoXRiCpT7zN8RPF5aknr7V4H2CZEIYudsjGSpO"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center space-x-6 lg:space-x-10">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`text-gray-800 hover:text-[#da2929] font-semibold transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#da2929] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-[13px] lg:text-[15px]" : "text-sm lg:text-[16px]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex flex-shrink-0">
                    <button className="bg-white text-[#da2929] border-[1px] border-[#da2929] px-7 py-2 rounded-md font-semibold tracking-wide transition-all duration-300 hover:bg-[#000000] hover:text-white hover:shadow-[0_8px_25px_rgba(218,41,41,0.3)] hover:border-none cursor-pointer active:scale-95">
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 p-2 z-[110] relative"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <motion.span
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0, width: isOpen ? "100%" : "100%" }}
                            className="w-full h-0.5 bg-current rounded-full origin-right transition-all"
                        />
                        <motion.span
                            animate={{ opacity: isOpen ? 0 : 1, width: "70%" }}
                            className="h-0.5 bg-current rounded-full transition-all"
                        />
                        <motion.span
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0, width: isOpen ? "100%" : "40%" }}
                            className="h-0.5 bg-current rounded-full origin-right transition-all"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[105] md:hidden flex flex-col p-8 pt-24"
                    >
                        <div className="flex flex-col gap-6">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black text-gray-900 tracking-tighter hover:text-[#da2929] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-[#da2929] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-red-500/20"
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;