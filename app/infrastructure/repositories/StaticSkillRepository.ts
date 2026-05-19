import type { Skill } from '@/app/domain/entities/Skill';
import type { SkillRepository } from '@/app/domain/repositories/SkillRepository';

const skills: readonly Skill[] = [
  { id: 'typescript', name: 'TypeScript', category: 'Languages' },
  { id: 'python', name: 'Python', category: 'Languages' },
  { id: 'cpp', name: 'C++', category: 'Languages' },
  { id: 'nextjs', name: 'Next.js', category: 'Web' },
  { id: 'react', name: 'React', category: 'Web' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Web' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile' },
  { id: 'pytorch', name: 'PyTorch', category: 'ML / Simulation' },
  { id: 'taichi', name: 'Taichi', category: 'ML / Simulation' },
  { id: 'aws', name: 'AWS', category: 'Cloud' },
] as const;

export class StaticSkillRepository implements SkillRepository {
  async findAll(): Promise<readonly Skill[]> {
    return skills;
  }
}
