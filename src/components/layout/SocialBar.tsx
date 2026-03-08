"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/fatima-ezzahra-kasmi",
        color: "group-hover:text-blue-500",
    },
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/fatimaezzahrakasmi",
        color: "group-hover:text-white",
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://www.youtube.com/@kasmi_tech",
        color: "group-hover:text-red-500",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/fatimaezzahrakassmi/",
        color: "group-hover:text-pink-500",
    },
    {
        // TikTok doesn't have a standard Lucide icon, using a custom SVG or fallback.
        name: "TikTok",
        icon: () => (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
            >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
        href: "https://www.tiktok.com/@kasmifatimaezzahra",
        color: "group-hover:text-white",
    },
];

export default function SocialBar() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40"
        >
            <div className="flex flex-col gap-5">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-2 -m-2 opacity-60 hover:opacity-100 transition-opacity"
                            aria-label={social.name}
                        >
                            <Icon className={`w-5 h-5 transition-colors ${social.color}`} />
                        </a>
                    );
                })}
            </div>
            {/* Vertical line connecting to bottom */}
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-white/20 to-white/20 mt-4" />
        </motion.div>
    );
}
