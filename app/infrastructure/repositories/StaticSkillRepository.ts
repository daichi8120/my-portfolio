import type { Skill } from '@/app/domain/entities/Skill';
import type { SkillRepository } from '@/app/domain/repositories/SkillRepository';

const skills: readonly Skill[] = [
  { id: 'cpp', name: 'C++', iconKey: 'cpp' },
  { id: 'python', name: 'Python', iconKey: 'python' },
  { id: 'rust', name: 'Rust', iconKey: 'rust' },
  { id: 'typescript', name: 'TypeScript', iconKey: 'typescript' },
  { id: 'flutter', name: 'Flutter', iconKey: 'flutter' },
  { id: 'nextjs', name: 'Next.js', iconKey: 'nextjs' },
  { id: 'react', name: 'React', iconKey: 'react' },
] as const;

export class StaticSkillRepository implements SkillRepository {
  async findAll(): Promise<readonly Skill[]> {
    return skills;
  }
}
