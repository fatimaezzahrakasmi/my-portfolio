import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectsData, projectCategories } from "@/data/projects";
import ProjectGridCard from "@/components/projects/ProjectGridCard";

export async function generateStaticParams() {
    return projectCategories.map((category) => ({
        category: category.id,
    }));
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const categoryId = params.category;
    const categoryInfo = projectCategories.find((c) => c.id === categoryId);

    if (!categoryInfo) {
        notFound();
    }

    const categoryProjects = projectsData.filter(
        (p) => p.category === categoryId
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24">
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white font-inter mb-12 transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Categories
            </Link>

            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white tracking-tight mb-4">
                    {categoryInfo.title.split("&")[0]}{" "}
                    {categoryInfo.title.includes("&") && (
                        <span className="text-accent italic">
                            &{categoryInfo.title.split("&")[1]}
                        </span>
                    )}
                </h1>
                <p className="font-inter text-white/60 text-lg max-w-2xl">
                    {categoryInfo.description}
                </p>
            </div>

            {categoryProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {categoryProjects.map((project, idx) => (
                        <ProjectGridCard key={project.id} project={project} index={idx} />
                    ))}
                </div>
            ) : (
                <div className="w-full py-24 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center">
                    <p className="text-white/40 font-inter text-lg">
                        No projects found in this category yet.
                    </p>
                    <p className="text-white/30 font-inter text-sm mt-2">
                        Check back soon for updates!
                    </p>
                </div>
            )}
        </div>
    );
}
