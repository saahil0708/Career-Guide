"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        name: "Arjun Sharma",
        role: "Oxford University Alumnus",
        university: "University of Oxford, UK",
        text: "The guidance I received was pivotal. They didn't just help me apply; they helped me find my voice and express my true potential. The transition from India to Oxford was seamless thanks to their expertise.",
        initials: "AS"
    },
    {
        name: "Sanya Gupta",
        role: "MIT Graduate '23",
        university: "Massachusetts Institute of Technology, USA",
        text: "I was overwhelmed by the choices until I met my mentors. Their data-driven approach combined with genuine care made all the difference. I couldn't have secured my place at MIT without their support.",
        initials: "SG"
    },
    {
        name: "Rohan Varma",
        role: "Stanford Researcher",
        university: "Stanford University, USA",
        text: "A truly professional and transformative experience. They specialize in finding the perfect fit between a student's ambition and the world's best institutions. Highly recommend for serious candidates.",
        initials: "RV"
    },
    {
        name: "Priya Nair",
        role: "LSE Graduate",
        university: "London School of Economics, UK",
        text: "Navigating the LSE application was complex, but my counselor made it feel like a breeze. Their insight into what the admissions committee looks for is unparalleled.",
        initials: "PN"
    },
    {
        name: "Karthik Raja",
        role: "MBA Candidate, INSEAD",
        university: "INSEAD, France/Singapore",
        text: "The MBA journey is as much about self-discovery as it is about prestige. They helped me distill my career goals into a compelling narrative that resonated with INSEAD.",
        initials: "KR"
    },
    {
        name: "Ishani Bose",
        role: "PhD Scholar, ETH Zurich",
        university: "ETH Zurich, Switzerland",
        text: "Securing a PhD position in Europe requires more than just good grades. Their advice on my research proposal and interview prep was instrumental in my success.",
        initials: "IB"
    }
];

const TestimonialCard = ({ testimonial, color = "#da2929" }: { testimonial: any, color?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[450px] bg-white p-8 rounded-[40px] border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(218,41,41,0.08)] transition-shadow duration-500"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-[#da2929]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>

                <p className="text-gray-700 font-medium leading-relaxed mb-8 text-lg italic">
                    "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#da2929] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-red-500/20">
                        {testimonial.initials}
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-gray-900 leading-tight">{testimonial.name}</h4>
                        <p className="text-[#da2929] text-[9px] font-black uppercase tracking-widest mt-0.5">{testimonial.role}</p>
                    </div>
                </div>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

const Testimonials = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-1200, 0]);

    return (
        <section ref={sectionRef} className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Kinetic Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                {/* Primary Background Text (Upper Row) */}
                <motion.div
                    style={{ x: x1 }}
                    className="absolute top-[10%] left-0 whitespace-nowrap opacity-[0.035]"
                >
                    <h3 className="text-[18vw] font-black leading-none tracking-tighter text-[#da2929]">
                        GLOBAL SUCCESS CONSULTANCY EXPERTISE WORLDWIDE
                    </h3>
                </motion.div>

                {/* Secondary Background Text (Lower Row) */}
                <motion.div
                    style={{ x: x2 }}
                    className="absolute top-[45%] left-0 whitespace-nowrap opacity-[0.045]"
                >
                    <h3 className="text-[18vw] font-black leading-none tracking-tighter text-gray-900">
                        TRANSFORMATION JOURNEY ACHIEVEMENT DREAMS
                    </h3>
                </motion.div>
            </div>

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10 mb-20 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#da2929] font-black uppercase tracking-[0.4em] text-[11px] mb-4"
                >
                    Voices of Excellence
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-tight"
                >
                    Stories That <span className="text-[#da2929]">Inspire.</span>
                </motion.h2>
            </div>

            <div className="flex flex-col gap-8 relative z-10">
                {/* Single Row of Testimonials */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-8 px-4"
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                            <TestimonialCard key={i} testimonial={t} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Achievement orbs (Subtle accent) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-red-100/20 blur-[120px] -z-10"
            />
        </section>
    );
};

export default Testimonials;
