import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog | Fatima Zohra",
    description: "Writing and sharing knowledge on AI and Development.",
};

export default function BlogPage() {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-24">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white tracking-tight mb-4">
                    Insights & <span className="text-accent italic">Writing</span>
                </h1>
                <p className="font-inter text-white/60 text-lg max-w-2xl">
                    A collection of thoughts, tutorials, and deep dives into Artificial
                    Intelligence, software architecture, and personal growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {/* Featured Ebook Card */}
                <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-accent/20 to-purple-500/10 border border-accent/20 hover:border-accent/40 transition-colors flex flex-col justify-between shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                        <BookOpen className="w-24 h-24 text-accent" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-bold font-outfit rounded-full mb-6">
                            FREE E-BOOK
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold font-outfit text-white mb-4">
                            n8n Kickstart: Learn Automation in a Weekend
                        </h3>
                        <p className="text-white/70 font-inter mb-8 max-w-sm">
                            A beginner-friendly step-by-step guide to building workflows. Save time, reduce errors, and automate daily tasks—no coding required.
                        </p>
                    </div>

                    <a
                        href="https://kasmitech.gumroad.com/l/n8nKickstart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium w-fit hover:bg-white/90 transition-colors"
                    >
                        Get it on Gumroad
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Future Articles Placeholder */}
                <div className="p-8 rounded-3xl border border-dashed border-white/20 flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <BookOpen className="w-8 h-8 text-white/40" />
                    </div>
                    <h3 className="text-xl font-bold font-outfit text-white mb-2">
                        More Articles Coming Soon
                    </h3>
                    <p className="text-white/50 font-inter max-w-xs">
                        I&apos;m currently drafting new content covering LangChain, n8n best
                        practices, and machine learning pipelines.
                    </p>
                </div>
            </div>
        </div>
    );
}
