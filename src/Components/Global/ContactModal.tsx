"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const contactOptions = [
    {
        name: "WhatsApp",
        description: "Instant chat with our team",
        href: "https://wa.me/1234567890", // Replace with actual number
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.631 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
        color: "bg-green-500",
        lightColor: "bg-green-50",
        textColor: "text-green-600"
    },
    {
        name: "Email Us",
        description: "Send us your queries anytime",
        href: "mailto:career@support.com",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        name: "Appointment",
        description: "Schedule a 1-on-1 session",
        href: "#cta", // Link to CTA section or booking page
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        color: "bg-[#da2929]",
        lightColor: "bg-red-50",
        textColor: "text-[#da2929]"
    }
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-[32px] shadow-2xl z-[205] overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Contact Us</h3>
                                    <p className="text-gray-500 text-sm font-medium mt-1">Choose your preferred way to connect</p>
                                </div>
                                <button 
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-4">
                                {contactOptions.map((option, index) => (
                                    <motion.div
                                        key={option.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={option.href}
                                            onClick={onClose}
                                            className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-transparent hover:bg-gray-50 transition-all duration-300"
                                        >
                                            <div className={`w-12 h-12 rounded-xl ${option.lightColor} flex items-center justify-center ${option.textColor} group-hover:scale-110 transition-transform`}>
                                                {option.icon}
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h4 className="font-bold text-gray-900 group-hover:text-[#da2929] transition-colors">{option.name}</h4>
                                                <p className="text-xs text-gray-500 font-medium">{option.description}</p>
                                            </div>
                                            <div className="text-gray-300 group-hover:text-[#da2929] transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                                    We typically respond within 1-2 hours
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
