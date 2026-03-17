"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 bg-gray-50 transition-all duration-500 ease-in-out ${
                scrolled 
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

                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center space-x-6 lg:space-x-10">
                        {['Home', 'About', 'Gallery', 'Contact', "Students' Corner"].map((item) => (
                            <li key={item}>
                                <Link 
                                    href={item === "Home" ? "/" : `/${item === "Students' Corner" ? 'students-corner' : item.toLowerCase().replace(/[\s']/g, '')}`} 
                                    className={`text-gray-800 hover:text-[#da2929] font-semibold transition-all duration-300 tracking-wide relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-6px] after:left-0 after:bg-[#da2929] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                                        scrolled ? "text-[13px] lg:text-[15px]" : "text-sm lg:text-[16px]"
                                    }`}
                                >
                                    {item}
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
                
                <button className="md:hidden text-gray-800 flex items-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;