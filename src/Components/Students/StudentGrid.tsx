"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import StudentDetailsModal from "./StudentDetailsModal";

interface Student {
    name: string;
    university: string;
    country: string;
    description: string;
    image: string;
    skills: string[];
    achievements: string[];
}

const StudentCard = ({ student, index, onClick }: { student: Student; index: number; onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white rounded-[2.5rem] p-8 lg:p-10 border border-gray-100 hover:border-[#da2929]/20 transition-all duration-700 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col"
        >
            {/* Top-Right Corner Arrow Button */}
            <button
                onClick={onClick}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1a2533] flex items-center justify-center group/btn hover:scale-110 transition-all duration-500 z-20 shadow-lg shadow-black/10"
            >
                <motion.svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
            </button>

            {/* Student Image Section */}
            <div className="relative w-28 h-28 rounded-[2rem] overflow-hidden border-2 border-gray-50 group-hover:border-[#da2929]/20 transition-colors mb-8 shrink-0">
                <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1">
                <div className="mb-6">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#da2929] transition-colors duration-500 mb-2">
                        {student.name}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#da2929] uppercase tracking-widest">{student.country}</span>
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest truncate">
                            {student.university}
                        </span>
                    </div>
                </div>

                <p className="text-gray-500 text-base font-medium leading-relaxed italic line-clamp-4">
                    "{student.description}"
                </p>
            </div>

            {/* Bottom Status Ornament */}
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#da2929]/40" />
                    <span className="text-[10px] font-black uppercase text-gray-300 tracking-[0.2em]">Verified Scholar</span>
                </div>
                <div className="text-[10px] font-black uppercase text-[#da2929]/20 tracking-widest">
                    GSC 2024
                </div>
            </div>
        </motion.div>
    );
};

const students: Student[] = [
    {
        name: "Aarav Sharma",
        university: "University of Oxford",
        country: "UK",
        description: "Global Success Consultancy helped me navigate the complex application process for Oxford. Their guidance was instrumental in my success.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop",
        skills: ["Machine Learning", "Data Analytics", "Public Speaking"],
        achievements: ["Clarendon Scholarship Recipient", "Best Paper Award - AI Ethics 2024", "Oxford Debating Society Member"]
    },
    {
        name: "Priya Patel",
        university: "Stanford University",
        country: "USA",
        description: "From my first consultation, I knew I was in good hands. They truly care about the students' future beyond just the admission.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
        skills: ["Software Engineering", "Product Design", "Entrepreneurship"],
        achievements: ["Stanford Ignite Winner", "Google Summer of Code 2023", "Women in Tech Mentor"]
    },
    {
        name: "Sofia Rodriguez",
        university: "ETH Zurich",
        country: "Switzerland",
        description: "Their expert counselors provided me with a personalized roadmap that made my dream of studying in Europe a reality.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
        skills: ["Robotics", "Quantum Physics", "German Proficiency"],
        achievements: ["Max Planck Research Intern", "CERN Summer Student", "Swiss Gov Scholarship recipient"]
    },
    {
        name: "Chen Wei",
        university: "University of Toronto",
        country: "Canada",
        description: "The visa support and scholarship guidance I received were unparalleled. I highly recommend them to any ambitious student.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
        skills: ["Computer Science", "Finance", "Leadership"],
        achievements: ["U of T Dean's List", "Ontario Graduate Scholarship", "Technovation Lead"]
    },
    {
        name: "Ananya Iyer",
        university: "NUS Singapore",
        country: "Singapore",
        description: "Strategy and precision are what they bring to the table. Their connections with top institutions worldwide are truly impressive.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
        skills: ["Civil Engineering", "City Planning", "Project Management"],
        achievements: ["ASEAN Scholar", "Innovative Project Award 2023", "Sustainability Council"]
    },
    {
        name: "Liam O'Connor",
        university: "Uni Melbourne",
        country: "Australia",
        description: "The mentorship program helped me transition smoothly into my new academic environment. I'm forever grateful for their support.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
        skills: ["Medical Sciences", "Biochemistry", "Public Health"],
        achievements: ["Global Health Fellow", "Outstanding Intern - LifeSciences", "Bio-Ethics Advocate"]
    }
];

const StudentGrid = () => {
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (student: Student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    return (
        <section className="py-24 bg-white font-[family-name:var(--font-absans)]">
            <div className="max-w-[1450px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {students.map((student, index) => (
                        <StudentCard
                            key={student.name}
                            index={index}
                            student={student}
                            onClick={() => handleOpenModal(student)}
                        />
                    ))}
                </div>
            </div>

            <StudentDetailsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                student={selectedStudent}
            />
        </section>
    );
};

export default StudentGrid;
