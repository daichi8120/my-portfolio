import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/app/domain/entities/Project';

interface ProjectCardProps {
  readonly project: Project;
  readonly priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={project.imageUrl}
          alt={`${project.title} のスクリーンショット`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
        >
          詳しく見る <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
}
