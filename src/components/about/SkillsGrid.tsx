"use client";

import { motion } from "framer-motion";

const technicalSkills = [
    {
        category: "Programming",
        items: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
    },
    {
        category: "Python Libraries",
        items: [
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "TensorFlow",
        ],
    },
    {
        category: "AI & Machine Learning",
        items: [
            "Machine Learning",
            "Deep Learning",
            "RAG",
        ],
    },
    {
        category: "Automation & AI Agents",
        items: ["n8n", "APIs", "Webhooks", "LangChain"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Docker", "Linux", "HugginFace"],
    },
    {
        category: "Data & Analytics Tools",
        items: [
            "Excel",
            "Power BI",
            "VBA",
            "SSIS",
            "SSAS",
        ],
    },
];

const softSkills = [
    "Self Learning",
    "Problem Solving",
    "Creativity",
];

export default function SkillsGrid() {
    return (
        <div className="space-y-16">
            {/* Technical Skills Grid */}
            <div>
                <h3 className="text-2xl font-bold font-outfit text-white mb-8 flex items-center gap-2">
                    Technical Skills
                    <span className="w-12 h-px bg-white/20 ml-2" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {technicalSkills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <h4 className="text-lg font-outfit text-accent mb-4">
                                {skillGroup.category}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-sm font-inter text-white/80 bg-black/40 rounded-lg border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Soft Skills Section */}
            <div>
                <h3 className="text-2xl font-bold font-outfit text-white mb-8 flex items-center gap-2">
                    Soft Skills
                    <span className="w-12 h-px bg-white/20 ml-2" />
                </h3>
                <div className="flex flex-wrap gap-4">
                    {softSkills.map((skill, idx) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-white font-inter font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-accent/40 transition-colors cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
