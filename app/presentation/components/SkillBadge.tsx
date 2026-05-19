import type { Skill } from '@/app/domain/entities/Skill';
import { skillIcons } from '@/app/presentation/icons/skillIcons';

interface SkillBadgeProps {
  readonly skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = skillIcons[skill.iconKey];
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="text-indigo-400 mb-2" aria-hidden="true">
        <Icon size={32} />
      </div>
      <p className="font-semibold text-white">{skill.name}</p>
    </div>
  );
}
