"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, memo } from "react";

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
    const numericPartMatch = value.match(/[\d,.]+/);
    const numericPart = numericPartMatch ? numericPartMatch[0] : "0";
    const numericValue = parseInt(numericPart.replace(/,/g, ''));

    const parts = value.split(numericPart);
    const prefix = parts[0] || "";
    const suffix = parts.slice(1).join(numericPart) || "";

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, numericValue, { duration, ease: "easeOut" });
            return controls.stop;
        }
    }, [inView, count, numericValue, duration]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const impacts = [
    {
        number: "15,000+",
        title: "Students Mentored",
        description: "Engaged in transformative one-on-one sessions to navigate diverse career paths.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        number: "95%",
        title: "Success Rate",
        description: "Of our candidates secure positions in their target industries within 6 months.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        number: "2,500+",
        title: "Career Transitions",
        description: "Successful shifts across industries, from entry-level to executive roles.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        number: "50+",
        title: "Partner Companies",
        description: "Exclusive partnerships with leading firms providing direct placement opportunities.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    }
];

const CounsellingImpact = memo(() => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-[-10%] w-[30%] h-[50%] bg-red-50/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gray-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#da2929] font-black uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Our Impact
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter"
                    >
                        Success in <span className="text-[#da2929]">Numbers.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {impacts.map((impact, index) => (
                        <ImpactCard key={index} impact={impact} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
});

const ImpactCard = memo(({ impact, index }: { impact: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative flex flex-col items-center text-center p-8 rounded-[40px] bg-gray-50 border border-transparent hover:bg-white hover:border-[#da2929]/10 hover:shadow-[0_20px_40px_-10px_rgba(218,41,41,0.05)] transition-all duration-500"
    >
        {/* Icon */}
        <div className="mb-6 w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#da2929] group-hover:scale-110 group-hover:bg-[#da2929] group-hover:text-white transition-all duration-500">
            {impact.icon}
        </div>

        {/* Number */}
        <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tighter group-hover:text-[#da2929] transition-colors duration-500">
            <Counter value={impact.number} />
        </h3>

        {/* Title */}
        <p className="text-lg font-bold text-gray-800 mb-3">
            {impact.title}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
            {impact.description}
        </p>

        {/* Subtle Bottom Line Decor */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-200 rounded-full group-hover:w-16 group-hover:bg-[#da2929] transition-all duration-500" />
    </motion.div>
));

CounsellingImpact.displayName = "CounsellingImpact";
ImpactCard.displayName = "ImpactCard";

export default CounsellingImpact;
