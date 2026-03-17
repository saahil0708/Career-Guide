"use client";

import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "Career Counseling",
        description: "Personalized 1-on-1 sessions to map your career trajectory with industry experts.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    },
    {
        number: "02",
        title: "Skill Assessment",
        description: "Comprehensive testing to identify your core strengths and areas for professional growth.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        number: "03",
        title: "Mentorship Program",
        description: "Connect with seasoned mentors who provide guidance, wisdom, and industry networking.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        number: "04",
        title: "Placement Support",
        description: "Direct bridge to top employers with exclusive job opportunities and insider referrals.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        number: "05",
        title: "Interview Prep",
        description: "Mock interviews and psychological coaching to master even the most difficult rounds.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        )
    }
];

const Features = () => {
    return (
        <section className="py-12 bg-gray-50 relative overflow-hidden">
            {/* Top Divider Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/30 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-[1450px] mx-auto px-4 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#da2929] font-black uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Our Expertise
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter"
                    >
                        Services We <span className="text-[#da2929]">Provide.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column (1 & 2) */}
                    <div className="flex flex-col gap-8">
                        {[services[0], services[1]].map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>

                    {/* Middle Column (3) - UTMOST CENTER */}
                    <div className="flex items-center justify-center">
                        <ServiceCard service={services[2]} index={2} />
                    </div>

                    {/* Right Column (4 & 5) */}
                    <div className="flex flex-col gap-8">
                        {[services[3], services[4]].map((service, index) => (
                            <ServiceCard key={index + 3} service={service} index={index + 3} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative h-[320px] p-10 rounded-[40px] bg-white border border-gray-200/60 hover:border-[#da2929]/20 hover:shadow-[0_20px_40px_-15px_rgba(218,41,41,0.08)] transition-all duration-500 overflow-hidden w-full shadow-sm"
    >
        {/* Large Background Number - SLIGHT RED COLOR */}
        <span className="absolute -bottom-6 -right-4 text-[120px] font-black text-[#da2929]/[0.05] select-none transition-all duration-500 group-hover:text-[#da2929]/10 group-hover:scale-110">
            {service.number}
        </span>

        {/* Icon Wrapper */}
        <div className="relative mb-8 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#da2929] group-hover:bg-[#da2929] group-hover:text-white group-hover:scale-110 transition-all duration-500 will-change-transform">
            <div className="absolute inset-0 bg-[#da2929]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {service.icon}
            </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#da2929] transition-colors duration-300">
                {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-300 line-clamp-3">
                {service.description}
            </p>
        </div>

        {/* Hover Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#da2929] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
);

export default Features;
