"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Youtube, Instagram } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/fatima-ezzahra-kasmi", color: "hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/fatimaezzahrakasmi", color: "hover:bg-white/10 hover:border-white/50 hover:text-white" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@kasmi_tech", color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fatimaezzahrakassmi/", color: "hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-500" },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@kasmifatimaezzahra",
        color: "hover:bg-white/10 hover:border-white/50 hover:text-white",
        icon: () => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Native form submit action or API endpoint integration
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-full"
                >
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white tracking-tight mb-4">
                            Let&apos;s Build <span className="text-accent italic">Together</span>
                        </h1>
                        <p className="font-inter text-white/60 text-lg max-w-md">
                            Whether you have a project in mind, want to discuss AI integration, or just want to say hi, my inbox is always open.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-12">
                        <div>
                            <p className="text-sm font-outfit text-white/40 uppercase tracking-widest mb-4">Direct Email</p>
                            <a href="mailto:[EMAIL_ADDRESS]" className="inline-flex items-center gap-3 text-2xl font-medium font-inter group">
                                <div className="p-3 bg-white/5 rounded-xl text-white group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                kasmi.fatimaelzzahrae@gmail.com
                            </a>
                        </div>

                        <div>
                            <p className="text-sm font-outfit text-white/40 uppercase tracking-widest mb-4">Follow Me</p>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-inter text-sm text-white/70 transition-all ${social.color}`}
                                        >
                                            <Icon className="w-4 h-4" />
                                            {social.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card-bg border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl"
                >
                    <form
                        action="https://formspree.io/f/mnjgaqgn"
                        method="POST"
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-inter text-white/60 pl-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="fatima zohra"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-inter text-white/60 pl-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="fati@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-inter text-white/60 pl-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Project Inquiry"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-inter text-white/60 pl-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Hi Fatima, I'd like to talk about..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all resize-none outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-medium font-inter py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors group"
                        >
                            Send Message
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
