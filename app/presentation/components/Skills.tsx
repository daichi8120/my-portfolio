import type { Skill } from '@/app/domain/entities/Skill';
import { SkillBadge } from '@/app/presentation/components/SkillBadge';

interface SkillsProps {
  readonly skills: readonly Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">スキル</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
