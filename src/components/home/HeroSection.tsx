"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function HeroSection() {
    const [isSwapped, setIsSwapped] = useState(false);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full z-10">
                {/* Left Side: Bio & Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-6 order-2 lg:order-1"
                >
                    <div className="space-y-4">
                        <h2 className="text-lg md:text-2xl font-inter text-accent font-medium tracking-wide">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-outfit text-white tracking-tight leading-tight">
                            Fatima Ezzahra Kasmi
                        </h1>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-white/80 font-inter font-light">
                            Master Student in AI • Automation & Data Enthusiast
                        </h3>
                    </div>

                    <p className="text-lg text-white/60 max-w-lg leading-relaxed font-inter pt-4">
                        I’m passionate about Artificial Intelligence, automation, and building
                        intelligent systems. With a background in economics and technology.
                        I enjoy combining business thinking with code to create smart,
                        practical solutions. Curious and creative, I’m constantly learning
                        and experimenting with new technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 sm:pt-6">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail className="w-4 h-4" />
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                {/* Right Side: Creative 2-Layer Image Swap */}
                <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 perspective-[1000px]">
                    <div
                        className="relative w-full max-w-[280px] md:max-w-md aspect-[4/5] mx-auto cursor-pointer group"
                        onMouseEnter={() => setIsSwapped(true)}
                        onMouseLeave={() => setIsSwapped(false)}
                    >
                        {/* Bottom Layer (Abstract/Logo) */}
                        <motion.div
                            layout
                            initial={false}
                            animate={{
                                y: isSwapped ? -30 : 20,
                                scale: isSwapped ? 1 : 0.95,
                                rotateX: isSwapped ? 0 : 5,
                                opacity: isSwapped ? 1 : 0.6,
                                zIndex: isSwapped ? 20 : 10,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 20,
                            }}
                            className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm"
                        >
                            <div className="w-full h-full flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                                <div className="text-white/20 font-outfit text-8xl font-black italic tracking-tighter">
                                    FZ
                                </div>
                            </div>
                        </motion.div>

                        {/* Glowing Diagonal Separator */}
                        <motion.div
                            animate={{
                                opacity: isSwapped ? 1 : 0,
                                scale: isSwapped ? 1.1 : 0.8,
                            }}
                            transition={{ duration: 0.4 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent -rotate-45 blur-[2px] z-25 pointer-events-none shadow-[0_0_15px_var(--accent)]"
                        />

                        {/* Top Layer (Personal Photo) */}
                        <motion.div
                            layout
                            initial={false}
                            animate={{
                                y: isSwapped ? 30 : -20,
                                scale: isSwapped ? 0.95 : 1,
                                rotateX: isSwapped ? -5 : 0,
                                opacity: isSwapped ? 0.7 : 1,
                                zIndex: isSwapped ? 10 : 20,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 20,
                            }}
                            className="absolute inset-0 bg-card-bg rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                        >
                            <div className="w-full h-full relative">
                                <Image
                                    src="/my-photo.jpg"
                                    alt="Fatima Zohra Kasmi"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
}
