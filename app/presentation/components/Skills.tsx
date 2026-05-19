import type { Skill, SkillCategory } from '@/app/domain/entities/Skill';

interface SkillsProps {
  readonly skills: readonly Skill[];
}

const CATEGORY_ORDER: readonly SkillCategory[] = [
  'Languages',
  'Web',
  'Mobile',
  'ML / Simulation',
  'Cloud',
] as const;

export function Skills({ skills }: SkillsProps) {
  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">03 · Skills</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">スキル</h2>
        </header>

        <dl className="divide-y divide-zinc-200">
          {groups.map(({ category, items }) => (
            <div
              key={category}
              className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-5"
            >
              <dt className="font-mono text-sm text-zinc-500">{category}</dt>
              <dd className="text-zinc-800">
                {items.map((s) => s.name).join(' · ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
