"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const timelineEvents = [
    {
        year: "2020",
        title: "High School Diploma – Physical Sciences & Chemistry",
        icon: GraduationCap,
    },
    {
        year: "2023",
        title: "Bachelor’s Degree in Economics & Management",
        icon: Briefcase,
        description:
            "Developed strong foundations in business strategy, economic analysis, and decision-making.",
    },
    {
        year: "2024",
        title: "Diploma in Software Development",
        icon: Code,
        description:
            "Acquired practical skills in programming, algorithms, and software engineering..",
    },
    {
        year: "2025",
        title: "Master’s Degree in Artificial Intelligence for Digital Economy & Management (In Progress)",
        icon: GraduationCap,
        description:
            "Currently focusing on machine learning, automation, and intelligent systems.",
    },
];

export default function Timeline() {
    return (
        <div className="relative py-12 max-w-3xl mx-auto">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 lg:left-1/2 top-12 bottom-12 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-16">
                {timelineEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    const Icon = event.icon;

                    return (
                        <motion.div
                            key={event.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex items-center justify-between flex-col lg:flex-row gap-8 ${isEven ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Spacer for alternating layout */}
                            <div className="hidden lg:block w-full flex-1" />

                            {/* Center Node/Icon */}
                            <div className="relative z-10 flex items-center justify-center shrink-0 w-16 h-16 rounded-full bg-card-bg border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-accent">
                                <Icon className="w-6 h-6" />
                                {/* Year Badge (Mobile only, hidden on desktop here) */}
                                <div className="absolute top-full mt-2 lg:hidden text-sm font-bold font-outfit text-white">
                                    {event.year}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div
                                className={`flex-1 w-full lg:w-auto bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-colors ${isEven ? "lg:text-right" : "lg:text-left"
                                    }`}
                            >
                                <div
                                    className={`hidden lg:block text-2xl font-black font-outfit text-accent mb-2 opacity-50 ${isEven ? "text-left" : "text-right"
                                        }`}
                                >
                                    {event.year}
                                </div>
                                <h3 className="text-xl font-bold text-white font-outfit mb-2">
                                    {event.title}
                                </h3>
                                <p className="text-white/60 font-inter text-sm md:text-base leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
