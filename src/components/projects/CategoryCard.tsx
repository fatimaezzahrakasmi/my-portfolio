"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
    id: string;
    title: string;
    description: string;
    color: string;
    borderClass: string;
    index: number;
}

export default function CategoryCard({
    id,
    title,
    description,
    color,
    borderClass,
    index,
}: CategoryCardProps) {
    return (
        <Link href={`/projects/${id}`} className="block h-full outline-none">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: -2,
                }}
                className={`group relative h-full w-full p-8 rounded-3xl bg-card-bg border border-white/10 ${borderClass} transition-all duration-300 overflow-hidden cursor-pointer flex flex-col perspective-[1000px] shadow-2xl`}
            >
                {/* Glow Background */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-3xl font-bold font-outfit text-white mb-4">
                        {title}
                    </h3>
                    <p className="text-white/60 font-inter text-lg flex-1 mb-12">
                        {description}
                    </p>

                    <div className="flex items-center gap-2 text-white/50 group-hover:text-accent transition-colors font-medium">
                        Explore Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
