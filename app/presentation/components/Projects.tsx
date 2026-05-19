import type { Project } from '@/app/domain/entities/Project';
import { ProjectCard } from '@/app/presentation/components/ProjectCard';

interface ProjectsProps {
  readonly projects: readonly Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">制作実績</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
