"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Events", "Success Stories", "Campus Visits"];

const galleryItems = [
    {
        id: 1,
        category: "Events",
        title: "Global Education Summit 2024",
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: 2,
        category: "Success Stories",
        title: "Oxford Admission Celebration",
        image: "https://images.unsplash.com/photo-1523050335392-9bc567c94bb5?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-square"
    },
    {
        id: 3,
        category: "Campus Visits",
        title: "Harvard Innovation Lab",
        image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1974&auto=format&fit=crop",
        aspect: "aspect-[16/9]"
    },
    {
        id: 4,
        category: "Events",
        title: "London Strategy Workshop",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: 5,
        category: "Success Stories",
        title: "Ivy League Guidance",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        aspect: "aspect-square"
    },
    {
        id: 6,
        category: "Campus Visits",
        title: "Stanford Research Center",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: 7,
        category: "Success Stories",
        title: "MIT Research Presentation",
        image: "https://images.unsplash.com/photo-1525921429624-479b6a29d531?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-[16/9]"
    },
    {
        id: 8,
        category: "Events",
        title: "Alumni Meet 2023",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: 9,
        category: "Success Stories",
        title: "Cambridge Breakthrough",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-square"
    },
    {
        id: 10,
        category: "Campus Visits",
        title: "Imperial Tech Immersion",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-[16/9]"
    },
    {
        id: 11,
        category: "Success Stories",
        title: "Yale Leadership Forum",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: 12,
        category: "Events",
        title: "Strategic Mentorship Day",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    }
];

const GalleryGrid = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-24 bg-white font-[family-name:var(--font-absans)]">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat
                                ? "bg-gray-900 text-white border-gray-900 shadow-xl"
                                : "bg-transparent text-gray-400 border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative break-inside-avoid group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100">
                                    <div className={`relative ${item.aspect} overflow-hidden`}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale group-hover:grayscale-0"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 lg:p-10">
                                        <span className="text-[#da2929] font-black text-[10px] uppercase tracking-widest mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Corner Badge */}
                                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M7 17l10-10M17 17V7H7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default GalleryGrid;
