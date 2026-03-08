import Timeline from "@/components/about/Timeline";
import SkillsGrid from "@/components/about/SkillsGrid";

export const metadata = {
    title: "About | Fatima Zohra",
    description: "My journey from Economics & Management to AI & Automation.",
};

export default function AboutPage() {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-12 md:py-24 space-y-32">
            {/* 1. Header & Narrative */}
            <section className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white tracking-tight">
                    My <span className="text-accent italic">Journey</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-inter text-accent font-medium tracking-wide">
                    Where Economics Meets Technology
                </h2>
                <div className="prose prose-invert prose-lg max-w-4xl font-inter text-white/80 leading-relaxed">
                    <p className="font-outfit text-2xl text-white font-medium mb-8">
                        My journey is not linear — and that&apos;s what makes it powerful.
                    </p>

                    <div className="space-y-6">
                        <p>
                            Since I was a little girl, I&apos;ve always been fascinated by technology. I was curious about how things worked behind the screen. I loved computers, digital tools, and anything related to innovation. But before graduating high school, I didn&apos;t clearly understand how to turn that passion into a concrete academic path. Because of orientation challenges, I enrolled in an economics and management university program.
                        </p>

                        <p>
                            At first, it felt like I was moving away from what I truly loved.
                        </p>

                        <p>
                            But over time, I realized something important: economics taught me how systems work. It taught me how markets move, how businesses think, how decisions are made, and how value is created. I wasn&apos;t abandoning technology — I was building another layer of understanding.
                        </p>

                        <p>
                            After completing my bachelor&apos;s degree in Economics and Management, I made a conscious decision: I would reconnect with my first love — technology.
                        </p>

                        <p>
                            I enrolled in a one-year intensive programming training. That year changed everything. I rediscovered the excitement of building, coding, solving problems, and understanding logic. It confirmed that technology was not just an interest — it was part of who I am.
                        </p>

                        <p>
                            Today, I am pursuing a Master&apos;s degree in <span className="text-white font-semibold flex-inline">Artificial Intelligence for the Digital Economy and Management</span>. And now everything makes sense.
                        </p>

                        <p className="text-xl font-medium text-white italic pt-4">
                            I no longer see economics and technology as two separate worlds.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 my-8">
                            <p className="text-accent font-outfit text-xl mb-4">I see:</p>
                            <ul className="list-disc list-outside ml-6 space-y-3 text-white/90">
                                <li><strong>AI</strong> transforming businesses</li>
                                <li><strong>Data</strong> driving strategic decisions</li>
                                <li><strong>Automation</strong> reshaping industries</li>
                                <li><strong>Digital systems</strong> redefining economic models</li>
                            </ul>
                        </div>

                        <div className="space-y-4 pt-4">
                            <p className="font-outfit text-2xl text-white font-medium">My vision is clear:</p>
                            <p className="text-xl text-white/90">I don&apos;t just want to build models.<br />I want to build intelligent solutions that create real economic value.</p>
                        </div>

                        <p className="pt-6 border-t border-white/10">
                            This combination — economics + programming + AI — is not accidental.<br />
                            It&apos;s the bridge between understanding how the world works and building the tools that will shape its future.
                        </p>

                        <p className="font-outfit text-xl text-accent font-medium pt-4">
                            And this is just the beginning.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Timeline */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold font-outfit text-white">
                    The Timeline
                </h2>
                <Timeline />
            </section>

            {/* 3. Skills & Tools */}
            <section className="space-y-12 bg-card-bg/50 -mx-6 lg:-mx-12 px-6 lg:px-12 py-24 rounded-[3rem] border border-white/5">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold font-outfit text-white mb-4">
                        Skills & Tools
                    </h2>
                    <p className="font-inter text-white/60 text-lg">
                        A blend of technical expertise and the soft skills necessary to
                        thrive in fast-paced software and AI environments.
                    </p>
                </div>
                <SkillsGrid />
            </section>

            {/* 4. Content Creation Identity */}
            <section className="space-y-8 max-w-3xl text-center mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white">
                    Beyond Coding — <span className="text-accent">Content Creation</span>
                </h2>
                <p className="font-inter text-white/70 text-lg leading-relaxed">
                    Beyond building projects, I create educational content to simplify AI,
                    automation, and programming for beginners and tech enthusiasts. I
                    believe in learning by sharing and growing together through content.
                </p>
            </section>
        </div>
    );
}
