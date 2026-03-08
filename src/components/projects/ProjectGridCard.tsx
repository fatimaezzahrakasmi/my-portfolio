"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Github, Play, ArrowRight } from "lucide-react";

interface ProjectGridCardProps {
    project: Project;
    index: number;
}

export default function ProjectGridCard({
    project,
    index,
}: ProjectGridCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-card-bg border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all shadow-xl hover:-translate-y-2 h-full"
        >
            {/* Thumbnail */}
            <div className="relative w-full aspect-video overflow-hidden">
                {/* Replace with next/image in the future when real URLs are ready */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold font-outfit text-white mb-3 line-clamp-2">
                    {project.title}
                </h3>
                <p className="text-white/60 font-inter text-sm mb-6 flex-1">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-inter text-white/50 bg-white/5 rounded-md border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[100px] flex items-center justify-center gap-2 text-sm font-medium text-black bg-white px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
                        >
                            <Play className="w-4 h-4" />
                            Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[100px] flex items-center justify-center gap-2 text-sm font-medium text-white border border-white/20 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
