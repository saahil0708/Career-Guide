"use client";

import { motion, AnimatePresence } from "framer-motion";

interface StudentDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    student: {
        name: string;
        university: string;
        country: string;
        description: string;
        image: string;
        skills: string[];
        achievements: string[];
    } | null;
}

const StudentDetailsModal = ({ isOpen, onClose, student }: StudentDetailsModalProps) => {
    if (!student) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 font-[family-name:var(--font-absans)]">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#da2929] hover:text-white transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image Section */}
                        <div className="lg:w-2/5 relative h-64 lg:h-auto bg-gray-100">
                            <img 
                                src={student.image} 
                                alt={student.name} 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                            
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="text-[10px] uppercase font-bold tracking-[0.3em] mb-2 opacity-80">Scholar Profile</div>
                                <h2 className="text-3xl font-black tracking-tight">{student.name}</h2>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-[#da2929] font-black text-xs uppercase tracking-widest">{student.country}</span>
                                <div className="w-1 h-1 rounded-full bg-gray-300" />
                                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                    {student.university}
                                </span>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-[10px] uppercase font-black text-gray-900 tracking-[0.4em] mb-4">The Journey</h3>
                                    <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
                                        "{student.description}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h3 className="text-[10px] uppercase font-black text-gray-900 tracking-[0.4em] mb-4">Core Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {student.skills.map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[10px] uppercase font-black text-gray-900 tracking-[0.4em] mb-4">Achievements</h3>
                                        <ul className="space-y-3">
                                            {student.achievements.map((ach, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#da2929] mt-1.5 flex-shrink-0" />
                                                    <span className="text-xs font-bold text-gray-500 leading-tight">{ach}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Verified Scholar</span>
                                </div>
                                <div className="text-[10px] font-black uppercase text-gray-300 tracking-[0.3em]">
                                    Global Success Consultancy
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default StudentDetailsModal;
