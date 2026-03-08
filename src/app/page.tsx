import HeroSection from "@/components/home/HeroSection";
import CategoryCard from "@/components/projects/CategoryCard";
import SkillsGrid from "@/components/about/SkillsGrid";
import { projectCategories } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Mini About Section to add length to Home */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                Briefly <span className="text-accent italic">About Me</span>
              </h2>
              <p className="text-white/60 font-inter text-lg leading-relaxed mb-8">
                I combine business thinking from my Economics & Management background with AI and automation to build intelligent solutions that solve real-world problems.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-white font-inter font-medium group hover:text-accent transition-colors">
                Read Full Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 bg-card-bg/30 p-8 rounded-[2rem] border border-white/5">
            <SkillsGrid />
          </div>
        </div>
      </section>

      {/* Featured Categories (Replacing individual projects) */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white">
            Areas of <span className="text-accent italic">Expertise</span>
          </h2>
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
      </section>
    </div>
  );
}
