import { projectCategories } from "@/data/projects";
import CategoryCard from "@/components/projects/CategoryCard";

export const metadata = {
    title: "Projects | Fatima Zohra",
    description: "Explore my work across Web, AI, and Automation.",
};

export default function ProjectsPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white tracking-tight mb-4">
                    Featured <span className="text-accent italic">Work</span>
                </h1>
                <p className="font-inter text-white/60 text-lg max-w-2xl">
                    Select a category below to explore projects and applications across my
                    core areas of expertise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                {projectCategories.map((category, idx) => (
                    <CategoryCard
                        key={category.id}
                        id={category.id}
                        title={category.title}
                        description={category.description}
                        color={category.color}
                        borderClass={category.border}
                        index={idx}
                    />
                ))}
            </div>
        </div>
    );
}
